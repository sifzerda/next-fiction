"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import Layout from "../../components/Layout";

// Highlight matched substrings
function highlightMatches(text, matchesForKey) {
  if (!matchesForKey || matchesForKey.length === 0) return text;

  let lastIndex = 0;
  const parts = [];

  // Flatten all indices to highlight
  const indices = matchesForKey.flatMap((m) => m.indices);
  indices.sort((a, b) => a[0] - b[0]);

  for (const [start, end] of indices) {
    if (start > lastIndex) parts.push(text.slice(lastIndex, start));
    parts.push(
      <mark key={start} className="bg-hYellow text-black">
        {text.slice(start, end + 1)}
      </mark>
    );
    lastIndex = end + 1;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

// Find all instances of exact substring in text for highlighting
function findIndices(text, query) {
  const indices = [];
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  let index = 0;

  while ((index = lowerText.indexOf(lowerQuery, index)) !== -1) {
    indices.push([index, index + query.length - 1]);
    index += query.length;
  }

  return indices.length > 0 ? [{ indices }] : [];
}

// Utility to create a snippet limited in length centered on match
function createSnippet(text, start, end, snippetLength = 100) {
  const snippetHalf = Math.floor(snippetLength / 2);
  const snippetStart = Math.max(0, start - snippetHalf);
  const snippetEnd = Math.min(text.length, end + snippetHalf);
  return {
    snippet: text.slice(snippetStart, snippetEnd),
    offset: snippetStart,
  };
}

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [resultsByRoute, setResultsByRoute] = useState(null);

  useEffect(() => {
    if (!query.trim() || query.trim().length < 2) {
      setResultsByRoute(null);
      return;
    }

    fetch("/searchIndex.json")
      .then((res) => res.json())
      .then((data) => {
        const isExact = query.startsWith('"') && query.endsWith('"');
        const rawQuery = isExact ? query.slice(1, -1).trim() : query.trim().toLowerCase();

        if (!rawQuery) {
          setResultsByRoute(null);
          return;
        }

        let filtered = [];

        if (isExact) {
          data.forEach((item) => {
            // Exact matches in content
            const contentMatches = findIndices(item.content || "", rawQuery);
            contentMatches.forEach((match) => {
              const [start, end] = match.indices[0];
              const { snippet, offset } = createSnippet(item.content || "", start, end, 100);
              filtered.push({
                ...item,
                content: snippet,
                matches: [{ key: "content", indices: [[start - offset, end - offset]] }],
              });
            });

            // Exact matches in title (each a separate result)
            if (item.title?.toLowerCase().includes(rawQuery)) {
              const titleMatches = findIndices(item.title, rawQuery);
              titleMatches.forEach((tm) => {
                filtered.push({
                  ...item,
                  content: "", // no snippet needed for title-only match
                  matches: [{ key: "title", indices: tm.indices }],
                });
              });
            }
          });
        } else {
          // Fuzzy search with Fuse.js
          const fuse = new Fuse(data, {
            keys: [
              { name: "title", weight: 0.7 },
              { name: "content", weight: 0.3 },
            ],
            threshold: 0.2,
            distance: 100,
            ignoreLocation: true,
            includeMatches: true,
            minMatchCharLength: 3,
            useExtendedSearch: true,
          });

          filtered = fuse.search(`'${rawQuery}`).map(({ item, matches }) => {
            // Limit content snippet length per result to avoid large blocks
            let snippet = item.content || "";
            let matchesAdjusted = matches || [];

            // If content match exists, trim content to snippet around first content match
            const contentMatch = matchesAdjusted.find((m) => m.key === "content");
            if (contentMatch && item.content) {
              const [start, end] = contentMatch.indices[0];
              const { snippet: s, offset } = createSnippet(item.content, start, end, 100);
              snippet = s;
              // Adjust match indices to snippet offsets
              matchesAdjusted = matchesAdjusted.map((m) => {
                if (m.key === "content") {
                  return {
                    ...m,
                    indices: m.indices.map(([s, e]) => [s - offset, e - offset]),
                  };
                }
                return m;
              });
            }

            return {
              ...item,
              content: snippet,
              matches: matchesAdjusted,
            };
          });
        }

        // Group by route with separate entries per match
        const grouped = filtered.reduce((acc, item) => {
          if (!acc[item.url]) acc[item.url] = [];
          acc[item.url].push(item);
          return acc;
        }, {});

        setResultsByRoute(grouped);
      });
  }, [query]);

  if (!query.trim()) {
    return (
      <Layout>
        <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
          <h1 className="font-geistMono uppercase text-xl text-yellow font-semibold mb-2 text-center">
            Search
          </h1>
          <p className="text-sm italic text-center">Please enter a search query.</p>
        </div>
      </Layout>
    );
  }

  if (!resultsByRoute) {
    return (
      <Layout>
        <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
          <h1 className="font-geistMono uppercase text-xl text-yellow font-semibold mb-2 text-center">
            Search
          </h1>
          <p className="text-sm italic text-center">Loading results...</p>
        </div>
      </Layout>
    );
  }

  const totalResults = Object.values(resultsByRoute).reduce((sum, arr) => sum + arr.length, 0);

  if (totalResults === 0) {
    return (
      <Layout>
        <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
          <h1 className="font-geistMono uppercase text-xl text-yellow font-semibold mb-2 text-center">
            Search
          </h1>
          <p className="text-sm italic text-center">No results found for "{query}".</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Banner */}
      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl text-yellow font-semibold mb-2 text-center">
          Search results for "{query}" ({totalResults} {totalResults === 1 ? "result" : "results"})
        </h1>
      </div>

      {/* Results grouped by route */}
      <section className="w-full max-w-screen-xl mx-auto mt-6 px-6 text-black flex flex-col gap-10">
        {Object.entries(resultsByRoute).map(([url, matches]) => (
          <div key={url}>
            <h2 className="text-lg font-bold text-blue-700 underline mb-4 break-words">
              <Link href={url}>{url}</Link>
            </h2>

            <div className="flex flex-col gap-6">
              {matches.map((match, i) => {
                const titleMatches = match.matches?.filter((m) => m.key === "title");
                const contentMatches = match.matches?.filter((m) => m.key === "content");

                return (
                  <article
                    key={i}
                    className="bg-white border border-gray-300 rounded-xl shadow p-4"
                  >
                    <h3 className="text-base font-semibold mb-1">
                      <Link
                        href={match.url}
                        className="text-blue-600 hover:underline break-words"
                      >
                        {highlightMatches(match.title, titleMatches)}
                      </Link>
                    </h3>
                    {match.content && (
                      <p className="text-sm text-gray-800">
                        <Link href={match.url} className="hover:underline">
                          {highlightMatches(match.content, contentMatches)}...
                        </Link>
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
