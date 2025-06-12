// src/components/Sidebar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();

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

  return (
    <aside role="complementary" className="
    w-full bg-bootstrapDark text-llBlue p-4 z-10 flex flex-col items-center gap-4 pt-52 
    sm:pt-28 sm:w-56 sm:h-screen sm:fixed sm:top-0 sm:left-0 sm:items-start sm:pt-28 sm:border-r-2 sm:border-yellow
    border border-llBlue">
      <nav className="w-full">
        <h2 className="text-yellow text-lg font-semibold mb-1 text-center sm:text-left sm:mt-6">Index</h2>
        <ul className="flex flex-col items-center gap-1 sm:items-start sm:pl-4 sm:mt-0">
          {links.map(({ href, label }) => (
            <li key={href} className="w-full">
              <Link
                href={href}
                className={`
          block w-full px-2 py-1 rounded-sm
          text-sm hover:bg-white hover:text-bootstrapDark transition
          ${pathname === href ? 'font-semibold text-white uppercase' : ''}`}>
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