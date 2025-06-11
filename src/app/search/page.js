'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import Layout from '../../components/Layout';

// Helper to highlight matches (same as before)
function highlightMatches(text, matchesForKey) {
  if (!matchesForKey) return text;

  let lastIndex = 0;
  const parts = [];

  const indices = matchesForKey.flatMap(m => m.indices);
  indices.sort((a, b) => a[0] - b[0]);

  for (const [start, end] of indices) {
    if (start > lastIndex) parts.push(text.slice(lastIndex, start));
    parts.push(<mark key={start} className="bg-hYellow text-black">{text.slice(start, end + 1)}</mark>);
    lastIndex = end + 1;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return parts;
}

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [resultsByRoute, setResultsByRoute] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      setResultsByRoute(null);
      return;
    }

    fetch('/searchIndex.json')
      .then(res => res.json())
      .then(data => {
        const fuse = new Fuse(data, {
          keys: ['title', 'content'],
          threshold: 0.5,
          ignoreLocation: true,
          includeMatches: true,
          findAllMatches: true,
        });

        const searchResults = fuse.search(query);
        const grouped = searchResults.reduce((acc, { item, matches }) => {
          if (!acc[item.url]) acc[item.url] = [];
          acc[item.url].push({ ...item, matches });
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
          Search results for "{query}" ({totalResults} {totalResults === 1 ? 'result' : 'results'})
        </h1>
      </div>

      {/* Results Section */}
      <section className="w-full max-w-screen-xl mx-auto mt-6 px-6 text-black flex flex-col gap-8">
        {Object.entries(resultsByRoute).map(([url, items]) => (
          <article key={url} className="bg-white rounded shadow p-4 border border-gray-300">
            <h2 className="text-xl font-semibold mb-3">
              <Link href={url} className="text-blue-600 hover:underline break-words">
                {url}
              </Link>{' '}
              <span className="text-gray-600 text-sm">
                ({items.length} {items.length === 1 ? 'match' : 'matches'})
              </span>
            </h2>

<ul className="list-disc list-inside space-y-2">
  {items.map(({ title, content, url, matches }, i) => {
    const titleMatches = matches?.filter(m => m.key === 'title');
    const contentMatches = matches?.filter(m => m.key === 'content');
    return (
      <li key={i}>
        <Link href={url} className="block text-blue-700 hover:underline">
          <strong>{highlightMatches(title, titleMatches)}</strong>:{" "}
          {highlightMatches(content.slice(0, 150), contentMatches)}...
        </Link>
      </li>
    );
  })}
</ul>
          </article>
        ))}
      </section>
    </Layout>
  );
}