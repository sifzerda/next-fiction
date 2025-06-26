// FootnoteRef.js
'use client';

import React, { useState, useRef, useEffect } from 'react';
import useFootnoteStore from '../utils/footnoteStore.js';

function FootnoteRef({ text }) {
  const getNextFootnoteNumber = useFootnoteStore(state => state.getNextFootnoteNumber);
  const indexRef = useRef(null);
  const citationRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [positionLeft, setPositionLeft] = useState(false);

  if (indexRef.current === null) {
    indexRef.current = getNextFootnoteNumber();
  }

  useEffect(() => {
    if (hovered && citationRef.current) {
      const rect = citationRef.current.getBoundingClientRect();
      const tooltipWidth = 220; // Approximate tooltip width (adjust as needed)
      const spaceRight = window.innerWidth - rect.right;

      if (spaceRight < tooltipWidth) {
        setPositionLeft(true);  // Not enough space right, open to left
      } else {
        setPositionLeft(false); // Enough space right, open to right
      }
    }
  }, [hovered]);

  return (
    <span
      ref={citationRef}
      className="relative cursor-pointer inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <sup className="text-blue-500 text-xs align-super">
        {indexRef.current}
      </sup>
      {hovered && (
        <span
  className={`
    absolute top-1/2 -translate-y-1/2 
    bg-gray-900 border border-yellow text-yellow rounded-sm text-xs px-3 py-3 border border-gray-600 shadow-md z-50 
    whitespace-pre-line inline-block text-left leading-normal min-w-[200px]
    ${positionLeft ? 'right-full mr-3' : 'left-full ml-3'}
  `}
  style={{ maxWidth: '220px' }}>
  {text}
</span>
      )}
    </span>
  );
}

export default FootnoteRef;