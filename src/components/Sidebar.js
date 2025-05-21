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
    { href: '/writersBlock', label: 'Writers Block' },
    { href: '/editing', label: 'Editing' },
    { href: '/title', label: 'Title' },
    { href: '/logline', label: 'Logline' },
    { href: '/synopsis', label: 'Synopsis' },
    { href: '/references', label: 'References' },
  ];

  return (
    <aside
      role="complementary"
      className="w-full bg-gray-800 text-white p-4 z-10 flex flex-col items-center gap-4 sm:w-64 sm:h-screen sm:fixed sm:top-0 sm:left-0 sm:items-start sm:pt-28">
      <nav className="w-full">
        <ul className="flex flex-col items-center gap-1 sm:items-start sm:pl-6 sm:mt-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm hover:text-gray-400 ${pathname === href ? 'underline font-semibold' : ''}`}>
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

