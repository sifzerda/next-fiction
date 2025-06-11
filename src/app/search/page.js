'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

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
      console.log('Loaded index data:', data);

      const fuse = new Fuse(data, {
        keys: ['title', 'content'],
        threshold: 0.5,
      });

      const searchResults = fuse.search(query).map(r => r.item);
      console.log('Fuse search results:', searchResults);

      const grouped = searchResults.reduce((acc, item) => {
        if (!acc[item.url]) acc[item.url] = [];
        acc[item.url].push(item);
        return acc;
      }, {});

      setResultsByRoute(grouped);
    });
}, [query]);

  if (!query.trim()) {
    return <p className="p-4 text-gray-600">Please enter a search query.</p>;
  }

  if (!resultsByRoute) {
    return <p className="p-4 text-gray-600">Loading results...</p>;
  }

  const totalResults = Object.values(resultsByRoute).reduce(
    (sum, arr) => sum + arr.length,
    0
  );

  if (totalResults === 0) {
    return <p className="p-4 text-gray-600">No results found for "{query}".</p>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Search results for "{query}" ({totalResults} {totalResults === 1 ? 'result' : 'results'})
      </h1>

      {Object.entries(resultsByRoute).map(([url, items]) => (
        <section key={url} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            <Link href={url} className="text-blue-600 hover:underline">
              {url}
            </Link>{' '}
            ({items.length} {items.length === 1 ? 'match' : 'matches'})
          </h2>

          <ul className="list-disc list-inside space-y-2">
            {items.map(({ title, content }, i) => (
              <li key={i}>
                <strong>{title}</strong>: {content.slice(0, 150)}...
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
