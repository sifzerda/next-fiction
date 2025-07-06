// src/components/Sidebar.js
// Uses Pointer Events API for sidebar dragging on small screens and up, with white hover bars
// grab the gold bar to drag the sidebar vertically
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

  // Draggable behavior for vertical movement on large screens
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    let isDragging = false;
    let startY = 0;
    let startTop = 0;

    function pointerDown(e) {
      if (window.innerWidth < 640) return; // only allow drag on sm: screens and up
      isDragging = true;
      startY = e.clientY;
      startTop = sidebar.offsetTop;
      document.body.style.userSelect = "none";
    }

    function pointerMove(e) {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      const newTop = Math.max(0, startTop + deltaY); // prevent moving off top of screen
      sidebar.style.top = `${newTop}px`;
    }

    function pointerUp() {
      isDragging = false;
      document.body.style.userSelect = "";
    }

    sidebar.addEventListener("pointerdown", pointerDown);
    window.addEventListener("pointermove", pointerMove);
    window.addEventListener("pointerup", pointerUp);

    return () => {
      sidebar.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerup", pointerUp);
    };
  }, []);

  return (
    <aside
      ref={sidebarRef}
      role="complementary"
      className="
        w-full bg-bootstrapDark text-llBlue p-4 z-10 flex flex-col items-center gap-4 pt-52 
        sm:pt-28 sm:w-52 sm:h-fit sm:fixed sm:top-0 sm:left-0 sm:items-start sm:pt-28 sm:border-r-2 sm:border-yellow
        border border-llBlue cursor-grab active:cursor-grabbing select-none"
    >
      <nav className="w-full">
        <h2 className="flex items-center gap-2 text-yellow text-lg font-semibold mb-1 mt-9 sm:text-left">
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
                `}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
