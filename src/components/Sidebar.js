// src/components/Sidebar.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

function Sidebar() {
  const pathname = usePathname();
  const scrollableRef = useRef(null);

  const links = [
    { href: "/story", label: "Story" },
    { href: "/premise", label: "Premise" },
    { href: "/plot", label: "Plot" },
    { href: "/themes", label: "Themes" },
    { href: "/conflict", label: "Conflict" },
    { href: "/scenes", label: "Scenes" },
    { href: "/mainCharacters", label: "Main Characters" },
    { href: "/secondaryCharacters", label: "Secondary Characters" },
    { href: "/setting", label: "Setting" },
    { href: "/subtext", label: "Subtext" },
    { href: "/description", label: "Description" },
    { href: "/dialogue", label: "Dialogue" },
    { href: "/suspense", label: "Suspense" },
    { href: "/pov", label: "POV" },
    { href: "/voice", label: "Voice" },
    { href: "/antagonists", label: "Antagonists" },
    { href: "/theFirstWords", label: "The First Words" },
    { href: "/theNextWords", label: "The Next Words" },
    { href: "/theLastWords", label: "The Last Words" },
    { href: "/writingDevices", label: "Writing Devices" },
    { href: "/editing", label: "Editing" },
    { href: "/marketing", label: "Marketing" },
    { href: "/references", label: "References" },
  ];

  return (
    <aside
      role="complementary"
      className={`
    w-full bg-bootstrapDark text-llBlue z-10 flex flex-col items-center gap-4
    pt-52 
    sm:pt-4 
    sm:w-52 sm:fixed sm:top-20 sm:left-0  
    sm:h-[calc(100vh-5rem)] sm:items-start sm:border-r-2 sm:border-yellow
    border border-llBlue
  `}
    >
      <nav className="w-full flex flex-col h-full">
        <h2 className="flex items-center gap-2 text-yellow text-lg font-semibold ml-3 mr-3 mb-1 mt-1 sm:mt-12 sm:text-left">
          <span className="flex-grow h-px bg-yellow"></span>
          <span>Index</span>
          <span className="flex-grow h-px bg-yellow"></span>
        </h2>

        {/* custom tailwind scrollbar */}
        <div
          ref={scrollableRef}
          className="flex-1 overflow-y-auto pr-1 px-4 pb-4 scrollbar-thin scrollbar-thumb-yellow scrollbar-track-bootstrapDark">
          <ul className="flex flex-col items-center gap-0 sm:items-start sm:mt-0">
            {links.map(({ href, label }) => (
              <li key={href} className="w-full">
                <Link
                  href={href}
                  className={`
                block w-full px-2 py-[1.6px] rounded-sm text-sm
                hover:bg-white hover:text-bootstrapDark transition
                ${pathname === href ? "font-semibold text-white uppercase" : ""}
              `}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Spacer div to ensure last link can scroll fully into view */}
          <div className="h-10 hidden sm:block" />
        </div>
      </nav>
    </aside>

  );
}

export default Sidebar;
