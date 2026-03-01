"use client"; // This tells Next.js this component needs to handle user clicks!

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // This state variable tracks whether the mobile menu is open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);

  // A helper function to close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="pt-6 px-6 md:px-20 relative z-50">
      <nav className="mx-auto flex max-w-full items-center justify-between rounded-full bg-white px-8 py-4 shadow-sm relative">
        
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#006EFF] to-[#071289] bg-clip-text text-transparent">
          Rezenait
        </Link>
        
        {/* Desktop Links (Hidden on mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
          <Link href="/careers" className="hover:text-blue-600 transition">Careers</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About Us</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Talk to Us</Link>
        </div>

        {/* Mobile Hamburger Button (Hidden on desktop) */}
        <button 
          className="md:hidden text-[#071289] focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* We use an SVG to draw the icon. If isOpen is true, draw an 'X'. If false, draw the 3 hamburger lines. */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {/* If isOpen is true, we render this white box with the links stacked vertically */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-6 right-6 bg-white rounded-2xl shadow-lg py-6 px-6 flex flex-col gap-6 text-center border border-gray-100">
          <Link href="/services" onClick={closeMenu} className="font-medium text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/portfolio" onClick={closeMenu} className="font-medium text-gray-700 hover:text-blue-600">Portfolio</Link>
          <Link href="/careers" onClick={closeMenu} className="font-medium text-gray-700 hover:text-blue-600">Careers</Link>
          <Link href="/blog" onClick={closeMenu} className="font-medium text-gray-700 hover:text-blue-600">Blog</Link>
          <Link href="/about" onClick={closeMenu} className="font-medium text-gray-700 hover:text-blue-600">About Us</Link>
          <Link href="/contact" onClick={closeMenu} className="font-medium text-gray-700 hover:text-blue-600">Talk to Us</Link>
        </div>
      )}
    </div>
  );
}