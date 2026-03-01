"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Header-Bg.svg')" }}
      ></div>

      <main className="mx-7 max-w-full md:px-12 pt-5 md:pt-10 pb-32 ">
        {/* Added mx-auto and text-center here! */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Animated Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            About Rezenait
          </motion.h1>

          {/* Animated Sub-headline */}
          {/* Added mx-auto here as well so the restricted width stays perfectly centered */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-4xl mx-auto md:text-lg text-white/100 leading-relaxed font-light"
          >
            We're an AI engineering company based in Sri Lanka, dedicated to
            transforming businesses through advanced artificial intelligence and
            data engineering solutions.
          </motion.p>
          
        </div>
      </main>
    </>
  );
}