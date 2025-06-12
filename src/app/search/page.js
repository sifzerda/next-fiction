"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import Layout from "../../components/Layout";

// Highlight matched substrings
function highlightMatches(text, matchesForKey) {
  if (!matchesForKey || matchesForKey.length === 0) return text;
  let lastIndex = 0;
  const parts = [];
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

// Exact match helper
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

// Create snippet
function createSnippet(text, start, end, snippetLength = 100) {
  const snippetHalf = Math.floor(snippetLength / 2);
  let snippetStart = Math.max(0, start - snippetHalf);
  let snippetEnd = Math.min(text.length, end + snippetHalf);
  for (let i = snippetStart; i > 0; i--) {
    const char = text[i];
    if (char === '.' || char === '?' || char === '!' || char === '\n') {
      snippetStart = i + 1;
      break;
    }
  }
  for (let i = snippetEnd; i < text.length; i++) {
    const char = text[i];
    if (char === '.' || char === '?' || char === '!' || char === '\n') {
      snippetEnd = i + 1;
      break;
    }
  }
  const snippet = text.slice(snippetStart, snippetEnd).trim();
  return { snippet, offset: snippetStart };
}

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = useState(pageParam);
  const [allResults, setAllResults] = useState([]);
  const resultsPerPage = 25;

  useEffect(() => {
    setCurrentPage(1); // reset page on new query
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    router.push(`?${params.toString()}`, { scroll: false });

    if (!query.trim() || query.trim().length < 2) {
      setAllResults([]);
      return;
    }

    fetch("/searchIndex.json")
      .then((res) => res.json())
      .then((data) => {
        const isExact = query.startsWith('"') && query.endsWith('"');
        const rawQuery = isExact ? query.slice(1, -1).trim() : query.trim().toLowerCase();

        if (!rawQuery) {
          setAllResults([]);
          return;
        }

        let filtered = [];

        if (isExact) {
          data.forEach((item) => {
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

            if (item.title?.toLowerCase().includes(rawQuery)) {
              const titleMatches = findIndices(item.title, rawQuery);
              titleMatches.forEach((tm) => {
                filtered.push({
                  ...item,
                  content: "",
                  matches: [{ key: "title", indices: tm.indices }],
                });
              });
            }
          });
        } else {
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

          fuse.search(`'${rawQuery}`).forEach(({ item, matches }) => {
            const contentMatches = matches?.filter((m) => m.key === "content") || [];
            contentMatches.forEach(({ indices }) => {
              indices.forEach(([start, end]) => {
                const { snippet, offset } = createSnippet(item.content || "", start, end, 100);
                filtered.push({
                  ...item,
                  content: snippet,
                  matches: [{ key: "content", indices: [[start - offset, end - offset]] }],
                });
              });
            });

            const titleMatches = matches?.filter((m) => m.key === "title") || [];
            titleMatches.forEach((titleMatch) => {
              filtered.push({
                ...item,
                content: "",
                matches: [titleMatch],
              });
            });

            if (!matches || (contentMatches.length === 0 && titleMatches.length === 0)) {
              filtered.push(item);
            }
          });
        }

        setAllResults(filtered);
      });
  }, [query]);

  const totalResults = allResults.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const paginatedResults = allResults.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  function goToPage(newPage) {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
    setCurrentPage(newPage);
  }

  return (
    <Layout>

      <div className="mt-4 bg-bootstrapDark border border-black text-white rounded-sm px-6 pt-4 pb-6 w-full max-w-screen-xl mx-auto">
        <h1 className="font-geistMono uppercase text-xl text-yellow font-semibold mb-2 text-center">
          Search
        </h1>
        {query.trim().length < 2 ? (
          <p className="text-sm italic text-center">Please enter a longer search query.</p>
        ) : totalResults === 0 ? (
          <p className="text-sm italic text-center">No results found for "{query}".</p>
        ) : (
          <p className="text-sm italic text-center">
            Showing {paginatedResults.length} of {totalResults} result
            {totalResults !== 1 && "s"} for "{query}" (Page {currentPage} of {totalPages})
          </p>
        )}

        {/* ------------------------- next / prev page btns ------------------------*/}
        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => goToPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="uppercase border border-llBlue px-2 py-1 rounded hover:text-yellow hover:border-yellow transition text-llBlue text-sm disabled:opacity-50 disabled:cursor-not-allowed">
              🡠
            </button>
            <span className="text-white self-center text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="uppercase border border-llBlue px-2 py-1 rounded hover:text-yellow hover:border-yellow transition text-llBlue text-sm disabled:opacity-50 disabled:cursor-not-allowed">
              🡢
            </button>
          </div>
        )}
      </div>

      {/* -------------------------search results ------------------------*/}

      <section className="w-full max-w-screen-xl mx-auto px-6 text-black flex flex-col gap-2">
        {paginatedResults.map((match, i) => {
          const titleMatches = match.matches?.filter((m) => m.key === "title");
          const contentMatches = match.matches?.filter((m) => m.key === "content");

          return (
            <article key={i} className="relative bg-white border border-gray-300 rounded-xl shadow p-4">
              <div className="absolute top-2 right-2 bg-hYellow text-black text-xs font-semibold px-2 py-0.5 rounded-sm shadow">
                #{(currentPage - 1) * resultsPerPage + i + 1}
              </div>
              <h3 className="text-base font-semibold mb-1">
                Page:{" "}
                <Link href={match.url} className="text-blue-600 hover:underline break-words">
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
      </section>

    </Layout>
  );
}
