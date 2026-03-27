"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services",  label: "Services"  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers",   label: "Careers"   },
  { href: "/blog",      label: "Blog"      },
  { href: "/about",     label: "About Us"  },
  { href: "/contact",   label: "Talk to Us"},
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="pt-6 px-6 md:px-20 relative z-50">
      <nav className="mx-auto flex max-w-full items-center justify-between rounded-full bg-white px-8 py-4 shadow-sm relative">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#006EFF] to-[#071289] bg-clip-text text-transparent"
        >
          Rezenait
        </Link>

        {/* Desktop Links — unchanged */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-blue-600 transition">
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#071289] focus:outline-none w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {/* Animated hamburger → X */}
          <div className="w-5 flex flex-col gap-[5px] relative">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-full bg-[#071289] rounded-full origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-full bg-[#071289] rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[2px] w-full bg-[#071289] rounded-full origin-center"
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1     }}
            exit={{   opacity: 0, y: -8, scale: 0.97   }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden absolute top-[88px] left-6 right-6 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col py-2">
              {links.map(({ href, label }, i) => {
                const isActive = pathname === href;
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1,  x: 0   }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className={`flex items-center justify-between px-6 py-3.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#006EFF] bg-blue-50"
                          : "text-gray-700 hover:text-[#006EFF] hover:bg-gray-50"
                      }`}
                    >
                      {label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006EFF]" />
                      )}
                    </Link>
                    {/* Divider — skip after last item */}
                    {i < links.length - 1 && (
                      <div className="mx-6 h-px bg-gray-100" />
                    )}
                  </motion.div>
                );
              })}

              {/* CTA row */}
              <div className="px-5 pt-3 pb-4">
                <Link
                  href="/contact#schedule-consultation"
                  onClick={closeMenu}
                  className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#006EFF] to-[#071289] text-white text-sm font-semibold shadow-md shadow-blue-200 active:scale-95 transition-transform"
                >
                  Book a Free Consultation →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}