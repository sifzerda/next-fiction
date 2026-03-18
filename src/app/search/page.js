// /app/search/page.js
'use client';
import { Suspense } from 'react';
import SearchResults from './results';

export const dynamic = 'force-dynamic'; // Prevents static prerendering

export default function Page() {
  return (
    <Suspense fallback="Loading...">
      <SearchResults />
    </Suspense>
  );
}