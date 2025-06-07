// src/components/Header.js (header + navigation bar)
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";

function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const links = [
    { href: "/", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "https://horrormap.vercel.app", label: "Horror Map" },
  ];

  if (isLoggedIn) {
    links.push({ href: "#", label: "Logout", onClick: handleLogout });
  } else {
    links.push({ href: "/signup", label: "Signup" }, { href: "/login", label: "Login" });
  }

  return (
   <header
  className="fixed top-0 left-0 w-full z-50 bg-bootstrapDark text-white shadow border-b-2"
  style={{ borderBottomColor: "yellow", borderBottomStyle: "ridge" }}
>
  {/* Title visible only on mobile, centered */}
  <div className="sm:hidden px-6 py-5" style={{ minHeight: "5rem" }}>
    <h1
      className="
        font-edu text-5xl text-llBlue drop-shadow-sm leading-none
        text-center
      "
    >
      Fiction Map
    </h1>
  </div>

  {/* Top Row: Title left, Search right on sm+ */}
  <div
    className="hidden sm:flex items-center justify-between px-6 py-5"
    style={{ minHeight: "5rem" }}
  >
    <h1
      className="
        font-edu text-4xl text-llBlue drop-shadow-sm leading-none
        text-left
      "
    >
      Fiction Map
    </h1>

    <div className="w-48 sm:w-64">
      <SearchBar />
    </div>
  </div>

  {/* Navigation Row */}
  <nav className="flex items-center justify-center px-6 py-2 sm:pt-0">
    <ul
      className="
        flex flex-col sm:flex-row justify-center text-center items-stretch sm:items-center max-sm:gap-0 gap-4 w-full sm:w-auto
      "
    >
      {links.map(({ href, label, onClick }) => (
        <li key={label}>
          {onClick ? (
            <button
              onClick={onClick}
              className="block uppercase border border-llBlue px-2 py-1 rounded hover:text-yellow hover:border-yellow transition cursor-pointer bg-transparent text-llBlue text-sm"
            >
              {label}
            </button>
          ) : (
            <Link
              href={href}
              className={`block uppercase border border-llBlue px-2 py-1 rounded hover:text-yellow hover:border-yellow transition text-llBlue text-sm ${
                pathname === href ? "font-semibold text-white" : ""
              }`}
            >
              {label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </nav>

  {/* Search bar below nav on mobile */}
  <div className="px-6 py-4 sm:hidden">
    <SearchBar />
      </div>
    </header>
  );
}

export default Header;

