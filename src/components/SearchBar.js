'use client';

import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState(null);

  useEffect(() => {
    fetch('/searchIndex.json')
      .then(res => res.json())
      .then(data => {
        const fuseInstance = new Fuse(data, {
          keys: ['title', 'content'],
          threshold: 0.3,
        });
        setFuse(fuseInstance);
      });
  }, []);

  useEffect(() => {
    if (fuse && query.trim()) {
      const searchResults = fuse.search(query).map(r => r.item);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query, fuse]);

  return (
    <div className="relative w-full h-full">
<input
  type="text"
  placeholder="Search by keyword..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="
    w-full px-2 py-1 border border-llBlue rounded bg-transparent text-llBlue text-sm
    focus:outline-none focus:border-yellow hover:border-yellow transition" />

      {results.length > 0 && (
        <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-y-auto">
          {results.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className="block px-4 py-3 hover:bg-gray-50 transition-all">
                <p className="font-semibold text-lg text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.content.slice(0, 150)}...
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
