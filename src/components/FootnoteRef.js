// FootnoteRef.js
'use client';

import React, { useState, useRef } from 'react';
import useFootnoteStore from '../utils/footnoteStore.js';

function FootnoteRef({ text }) {
  const getNextFootnoteNumber = useFootnoteStore(state => state.getNextFootnoteNumber);
  const indexRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  if (indexRef.current === null) {
    indexRef.current = getNextFootnoteNumber();
  }

  return (
    <span
      className="relative cursor-pointer inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <sup className="text-blue-500 text-xs align-super">
        {indexRef.current}
      </sup>
      {hovered && (
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-900 text-yellow rounded-sm text-xs px-2 py-2 border border-gray-600 shadow-md z-50 whitespace-pre-line inline-block text-left leading-tight">
          {text}
        </span>
      )}
    </span>
  );
}

export default FootnoteRef;

