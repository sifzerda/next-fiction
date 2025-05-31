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

  return React.createElement(
    'span',
    {
      className: 'footnote-ref',
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
    [
      React.createElement(
        'sup',
        { key: 'marker', className: 'footnote-marker' },
        indexRef.current
      ),
      hovered &&
        React.createElement(
          'span',
          { key: 'tooltip', className: 'footnote-tooltip' },
          text
        )
    ].filter(Boolean)
  );
}

export default FootnoteRef;
