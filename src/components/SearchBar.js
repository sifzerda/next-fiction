// app/components/SearchBar.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full h-full">
      <input
        type="text"
        placeholder="Search by keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
      flex-grow
      px-2 py-1
      border border-llBlue
      rounded-l
      bg-bootstrapDark
      text-llBlue
      text-sm
      focus:outline-none
      focus:border-yellow
      hover:border-yellow
      transition
    "
      />
      <button
        type="submit" className="
      px-4
      border border-l-0 border-llBlue
      bg-bootstrapDark
      rounded-r
      text-llBlue
      text-sm
      uppercase
      hover:text-yellow
      hover:border-yellow
      transition
      cursor-pointer
      flex items-center justify-center
      whitespace-nowrap
    "
      >
        Search
      </button>
    </form>
  );
}
