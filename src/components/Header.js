// src/components/Header.js (header + navigation bar)
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import FMLogo from '../app/assets/FMLogo.png';
import FMHeader from '../app/assets/FMheader.png';

function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const links = [
    { href: '/', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: 'https://horrormap.vercel.app', label: 'Horror Map' },
  ];

  if (isLoggedIn) {
    links.push({ href: '#', label: 'Logout', onClick: handleLogout });
  } else {
    links.push(
      { href: '/signup', label: 'Signup' },
      { href: '/login', label: 'Login' }
    );
  }

  return (
    <header
  className="fixed top-0 left-0 w-full z-50 bg-bootstrapDark text-white shadow border-b-2"
  style={{ borderBottomColor: 'yellow', borderBottomStyle: 'ridge' }} 
>
      {/* Top Header Row – Responsive Layout */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center relative px-6 space-y-1 sm:space-y-0">

        {/* Left-Aligned Logo on sm+ */}
        <div className="hidden sm:block absolute top-1 left-2 h-20 w-20">
          <div className="relative w-full h-full">
            <Image
              src={FMLogo}
              alt="Site Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        {/* Centered Logo on small screens (bigger size) */}
        <div className="block sm:hidden mx-auto py-2 h-24 w-24">
          <div className="relative w-full h-full">
            <Image src={FMLogo} alt="Site Logo" fill style={{ objectFit: 'contain' }} priority />
          </div>
        </div>

        {/* Title – always centered */}
        <div className="hidden sm:block mx-auto h-20 w-auto">
          <div className="relative w-48 h-full mx-auto">
            <Image src={FMHeader} alt="Fiction Map Title" fill style={{ objectFit: 'contain' }} priority />
          </div>
        </div>

      </div>

      {/* Navigation Row */}
      <nav className="flex items-center justify-center px-6 py-2">
        <ul className="flex flex-col sm:flex-row justify-center text-center items-stretch sm:items-center max-sm:gap-0 gap-4 w-full sm:w-auto">
          {links.map(({ href, label, onClick }) => (
            <li key={label}>
              {onClick ? (
                <button
                  onClick={onClick}
                  className="block border border-llBlue px-2 py-1 rounded hover:text-yellow hover:border-yellow transition cursor-pointer bg-transparent text-llBlue text-sm">
                  {label}
                </button>
              ) : (
                <Link
                  href={href}
                  className={`block uppercase border border-llBlue px-2 py-1 rounded hover:text-yellow hover:border-yellow transition text-llBlue text-sm ${pathname === href ? 'font-semibold text-white' : ''
                    }`}>
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
