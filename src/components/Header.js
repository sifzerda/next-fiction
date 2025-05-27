// src/components/Header.js (header + navigation bar)
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import FMLogo from '../app/assets/FMLogo.png';

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
    { href: '/', label: 'Horror Map' },
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
    <header className="fixed top-0 left-0 w-full z-50 bg-bootstrapDark text-white border-b-2 border-yellow shadow">
      {/* Top Header Row – Responsive Layout */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center relative px-6 py-2 space-y-1 sm:space-y-0">

        {/* Left-Aligned Logo on sm+ */}
        <div className="hidden sm:block absolute top-1 left-2 h-24 w-24">
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
        <div className="block sm:hidden mx-auto h-24 w-24">
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

        {/* Title – always centered */}
        <div className="hidden sm:block text-sm sm:text-base font-semibold text-center text-llBlue">FICTION MAP</div>

      </div>

      {/* Navigation Row */}
      <nav className="h-16 flex items-center justify-center px-6">
        <ul className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-2">
          {links.map(({ href, label, onClick }) => (
            <li key={label}>
              {onClick ? (
                <button
                  onClick={onClick}
                  className="border border-llBlue px-2 py-1 rounded hover:text-white hover:border-gray-400 transition cursor-pointer bg-transparent text-llBlue text-sm">
                  {label}
                </button>
              ) : (
                <Link
                  href={href}
                  className={`border border-llBlue px-2 py-1 rounded hover:text-white hover:border-white transition text-llBlue text-sm ${pathname === href ? 'font-semibold' : ''
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
