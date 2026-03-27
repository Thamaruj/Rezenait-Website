"use client"; // This lets animations play in the browser!

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div 
        className="absolute top-0 left-0 w-full md:min-h-screen h-125 -z-10 bg-no-repeat bg-cover bg-center md:bg-top "
        style={{ backgroundImage: "url('/Hero Section Bg.svg')" }}
      />

      {/* Your exact existing main container code here */}
      <main className="mx-7 max-w-full md:px-12 pt-10 pb-10 md:pt-20 md:mb-20">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#020844] to-[#1353D2] bg-clip-text text-transparent md:leading-tight"
          >
            Designing the Intelligence Behind Modern Enterprises
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-lg text-lg text-gray-600 leading-relaxed"
          >
            Scalable AI systems built on a robust data foundation to accelerate operations and unlock new growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link href={"/contact"}>
              <button className="group mt-10 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-light text-white shadow-md transition-all duration-300 ease-out hover:bg-blue-700 hover:shadow-lg md:hover:-translate-y-1 hover:scale-[1.02] cursor-pointer active:scale-95">
                Get Started
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </main> 
    </>
  );
}