"use client" 

import {motion} from "framer-motion";
import { url } from "inspector";

export default function CareersPage(){
    return(
        <>
            <div
                className="absolute top-0 left-0 w-full h-[400px] md:h-[450px] -z-10 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/Header-Bg.svg')"}}
            >

            </div>

            <main className="mx-7 max-w-full md:px-12 pt-5 md:pt-10 pb-32">

                {/* Header Text Section */}
                <div className="max-w-4xl">
                
                {/* Animated Main Headline */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                >
                    Build the Future of AI with Rezenait
                </motion.h1>
                
                {/* Animated Sub-headline */}
                {/* delay: 0.2 ensures it smoothly follows the main headline */}
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-6 max-w-3xl md:text-lg text-white/90 leading-relaxed font-light"
                >
                    Join our team of AI engineers and data scientists delivering cutting-edge solutions to enterprises worldwide. Shape the future of artificial intelligence in Sri Lanka and beyond                
                </motion.p>

                {/* Animated Call to Action Button */}
                {/* delay: 0.4 ensures it fades in last */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-4"
                >
                    {/* The actual button styled to match the Figma design */}
                    <button className="group cursor-pointer flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-light text-blue-600 shadow-md transition-all duration-300 ease-out md:hover:bg-blue-600 md:hover:text-white md:hover:shadow-lg md:hover:-translate-y-1 active:scale-95">
                    View Open Positions
                        <span 
                            aria-hidden="true" 
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            &rarr;
                        </span>
                    </button>
                </motion.div>

                </div>

            </main>

        
        </>
    )
}