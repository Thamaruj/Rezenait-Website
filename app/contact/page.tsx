"use client" 

import {motion} from "framer-motion";
import { url } from "inspector";

export default function ContactPage(){
    return(
        <>
            <div
                className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/Header-Bg.svg')"}}
            >

            </div>

            <main className="mx-7 max-w-full md:px-12 pt-5 md:pt-10 pb-32">

                {/* Header Text Section */}
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                
                {/* Animated Main Headline */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-6xl font-bold text-white tracking-tight"
                >
                    Let's Build Something Intelligent
                </motion.h1>
                
                {/* Animated Sub-headline */}
                {/* delay: 0.2 ensures it smoothly follows the main headline */}
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-6 max-w-3xl md:text-lg text-white/100 leading-relaxed font-light"
                >
                    Schedule a free consultation to discuss your AI engineering needs. Our team will help you identify opportunities and build a roadmap for success.
                </motion.p>

                </div>

            </main>

        
        </>
    )
}