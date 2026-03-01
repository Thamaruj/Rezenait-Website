"use client"; // Required for Framer Motion animations to run in the browser

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
      {/* Header Background Layer: Pins to the top, but only goes down 400px */}
      <div 
        className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Header-Bg.svg')" }}
      />

      <main className="mx-7 max-w-full md:px-12 md:pt-10 mt-5 pb-32">
        
        {/* Header Text Section */}
        <div className="max-w-4xl">
          
          {/* Animated Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            AI Engineering Services
          </motion.h1>
          
          {/* Animated Sub-headline */}
          {/* delay: 0.2 ensures it smoothly follows the main headline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-3xl md:text-lg text-white/100 leading-relaxed font-light"
          >
            Comprehensive AI consultancy and data engineering solutions delivered by Sri Lanka's leading AI engineering company
          </motion.p>

        </div>

        {/* The rest of your page content will go down here, sitting on top of the dotted background! */}
        <div className="mt-32">
          {/* We will add the services grid here later */}
        </div>
        
      </main>
    </>
  );
}