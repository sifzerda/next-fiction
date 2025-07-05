// src/components/FootnoteRef.js
"use client";

import React, { useState, useRef, useEffect } from "react";
import useFootnoteStore from '../utils/footnoteStore.js';

function FootnoteRef({ text }) {
  const getNextFootnoteNumber = useFootnoteStore(state => state.getNextFootnoteNumber);
  const indexRef = useRef(null);
  const citationRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [locked, setLocked] = useState(false);
  const [positionLeft, setPositionLeft] = useState(false);

  if (indexRef.current === null) {
    indexRef.current = getNextFootnoteNumber();
  }

  useEffect(() => {
    if ((hovered || locked) && citationRef.current) {
      const rect = citationRef.current.getBoundingClientRect();
      const tooltipWidth = 220;
      const spaceRight = window.innerWidth - rect.right;
      setPositionLeft(spaceRight < tooltipWidth);
    }
  }, [hovered, locked]);

  const handleClick = () => {
    setLocked(prev => !prev);
  };

  const handleMouseEnter = () => {
    if (!locked) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!locked) setHovered(false);
  };

  return (
    <span
      ref={citationRef}
      className="relative cursor-pointer inline-block"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <sup
        className={`
          text-xs align-super transition-colors duration-200 select-none
          ${hovered || locked ? 'text-black' : 'text-midBlue'}
        `}
      >
        {indexRef.current}
      </sup>

      {(hovered || locked) && (
<span
  className={`
    absolute top-1/2 -translate-y-1/2 
    bg-gray-900 ${locked ? 'text-lllBlue border border-lllBlue' : 'text-yellow border border-yellow'} 
    rounded-sm text-xs px-3 py-3 shadow-md z-50 
    whitespace-pre-line inline-block text-left leading-normal 
    min-w-[200px] max-w-[220px] break-words overflow-hidden
    ${positionLeft ? 'right-full mr-3' : 'left-full ml-3'}
  `}
>
  {text}
</span>
      )}
    </span>
  );
}

export default FootnoteRef;
