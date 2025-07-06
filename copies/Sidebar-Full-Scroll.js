// src/components/Sidebar.js
// correct scrolling length, but also grabbing/dragging, and too much padding/margin above
"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  const links = [
    { href: '/story', label: 'Story' },
    { href: '/premise', label: 'Premise' },
    { href: '/plot', label: 'Plot' },
    { href: '/themes', label: 'Themes' },
    { href: '/conflict', label: 'Conflict' },
    { href: '/scenes', label: 'Scenes' },
    { href: '/mainCharacters', label: 'Main Characters' },
    { href: '/secondaryCharacters', label: 'Secondary Characters' },
    { href: '/setting', label: 'Setting' },
    { href: '/subtext', label: 'Subtext' },
    { href: '/description', label: 'Description' },
    { href: '/dialogue', label: 'Dialogue' },
    { href: '/suspense', label: 'Suspense' },
    { href: '/pov', label: 'POV' },
    { href: '/voice', label: 'Voice' },
    { href: '/antagonists', label: 'Antagonists' },
    { href: '/theFirstWords', label: 'The First Words' },
    { href: '/theNextWords', label: 'The Next Words' },
    { href: '/theLastWords', label: 'The Last Words' },
    { href: '/writingDevices', label: 'Writing Devices' },
    { href: '/editing', label: 'Editing' },
    { href: '/marketing', label: 'Marketing' },
    { href: '/references', label: 'References' },
  ];

  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;

    let isDown = false;
    let startY;
    let scrollTop;

    function handlePointerDown(e) {
      if (window.innerWidth < 640) return;
      isDown = true;
      el.classList.add('scrolling');
      startY = e.pageY - el.offsetTop;
      scrollTop = el.scrollTop;
      e.preventDefault();
    }

    function handlePointerMove(e) {
      if (!isDown) return;
      const y = e.pageY - el.offsetTop;
      const walk = (y - startY) * 1.5;
      el.scrollTop = scrollTop - walk;
    }

    function handlePointerUp() {
      isDown = false;
      el.classList.remove('scrolling');
    }

    el.addEventListener('pointerdown', handlePointerDown);
    el.addEventListener('pointermove', handlePointerMove);
    el.addEventListener('pointerup', handlePointerUp);
    el.addEventListener('pointerleave', handlePointerUp);

    return () => {
      el.removeEventListener('pointerdown', handlePointerDown);
      el.removeEventListener('pointermove', handlePointerMove);
      el.removeEventListener('pointerup', handlePointerUp);
      el.removeEventListener('pointerleave', handlePointerUp);
    };
  }, []);

  return (
    <aside className="w-full bg-bootstrapDark text-llBlue p-0 z-10 sm:w-52 sm:fixed sm:top-0 sm:left-0 sm:h-screen sm:border-r-2 sm:border-yellow border border-llBlue">
      <div ref={sidebarRef} className="h-full overflow-y-auto sm:pt-6 sm:pb-32 p-4 flex flex-col gap-4 cursor-grab active:cursor-grabbing select-none">
        <nav className="w-full">
          <h2 className="flex items-center gap-2 text-yellow text-lg font-semibold mb-1 sm:text-left">
            <span>Index</span>
            <span className="flex-grow h-px bg-yellow"></span>
          </h2>
          <ul className="flex flex-col items-center gap-0 sm:items-start sm:pl-4 sm:mt-0">
            {links.map(({ href, label }) => (
              <li key={href} className="w-full">
                <Link
                  href={href}
                  className={`
                    block w-full px-2 py-[1.6px] rounded-sm text-sm
                    hover:bg-white hover:text-bootstrapDark transition
                    ${pathname === href ? 'font-semibold text-white uppercase' : ''}
                  `}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;