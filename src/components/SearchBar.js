// app/components/SearchBar.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full h-full">
      <input
        type="text"
        placeholder="Search by keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full px-2 py-1 border border-llBlue rounded bg-transparent text-llBlue text-sm
          focus:outline-none focus:border-yellow hover:border-yellow transition"
      />
      <button
        type="submit"
        className="absolute right-1 top-1 bottom-1 px-3 bg-yellow rounded text-llBlue font-semibold hover:bg-yellow-600 transition"
      >
        Search
      </button>
    </form>
  );
}
