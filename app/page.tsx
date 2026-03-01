"use client"; // This tells Next.js this file runs in the browser so animations can play!

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Background Layer */}
      <div 
        className="absolute top-0 left-0 w-full min-h-screen -z-10 bg-no-repeat bg-cover bg-center md:bg-top"
        style={{ backgroundImage: "url('/Hero Section Bg.svg')" }}
      />

      <main className="mx-7 max-w-full md:px-12 pt-10 pb-10 md:pt-20">
        <div className="max-w-3xl">
          
          {/* Animated Headline */}
          {/* initial = starting state (invisible and pushed down) */}
          {/* animate = ending state (fully visible and in its normal position) */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#020844] to-[#1353D2] bg-clip-text text-transparent"
          >
            Designing the Intelligence Behind Modern Enterprises
          </motion.h1>
          
          {/* Animated Sub-headline */}
          {/* We added a 'delay: 0.2' so it fades in right after the title */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-lg text-lg text-gray-600 leading-relaxed"
          >
            Scalable AI systems built on a robust data foundation to accelerate operations and unlock new growth.
          </motion.p>
          
          {/* Animated Button */}
          {/* We added a 'delay: 0.4' so it fades in last */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="mt-10 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg">
              Get Started
              <span aria-hidden="true">&rarr;</span>
            </button>
          </motion.div>

        </div>
      </main>
    </>
  );
}