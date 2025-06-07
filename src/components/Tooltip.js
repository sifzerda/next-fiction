"use client";

import { useState, useEffect, useRef } from 'react';

export default function Tooltip({ number, text }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <span
      ref={ref}
      onClick={() => setVisible(!visible)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative inline-block text-blue-600 font-bold cursor-pointer align-baseline mx-1">
      [{number}]
      {visible && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-64 text-sm text-white bg-gray-800 p-2 rounded shadow-lg z-10 not-italic">
          {text}
        </span>
      )}
    </span>
  );
}