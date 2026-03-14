"use client" 

import {motion} from "framer-motion";

const perks = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-cyan-400" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9l4 2m4-2a8 8 0 11-16 0 8 8 0 0116 0z" />
        </svg>
      ),
      label: "Work-Life Balance",
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-cyan-400" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5-1.57.393" />
        </svg>
      ),
      label: "Cutting-Edge Tech",
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-cyan-400" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      label: "Collaborative Culture",
    },
  ];

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
                
                <section className=" px-6 md:px-16 py-20 mt-16">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

                        {/* -------- Left: Text -------- */}
                        <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex-1"
                        >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A0E3C] mb-6">
                            Why Join Rezenait?
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                            We're building the leading AI engineering company in Sri Lanka. Join
                            us to work on challenging problems with cutting-edge technology.
                        </p>
                        </motion.div>

                        {/* -------- Right: Gradient Card Panel -------- */}
                        <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex-1 w-full"
                        >
                        {/* Outer gradient container */}
                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5B9BD5] via-[#3B6FCC] to-[#1A3A8C]">
                            <div className="grid grid-cols-3 gap-4">
                            {perks.map((perk, index) => (
                                <motion.div
                                key={perk.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                                className="flex flex-col items-center gap-4"
                                >
                                {/* Frosted card */}
                                <div className="w-full aspect-square rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                    {/* Hexagon icon wrapper */}
                                    <div className="relative w-14 h-14 flex items-center justify-center">
                                    {/* Hexagon SVG background */}
                                    <svg
                                        viewBox="0 0 100 100"
                                        className="absolute inset-0 w-full h-full"
                                        fill="none"
                                    >
                                        <polygon
                                        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                                        fill="#0D1B3E"
                                        stroke="#1E3A6E"
                                        strokeWidth="3"
                                        />
                                    </svg>
                                    {/* Icon on top */}
                                    <span className="relative z-10">{perk.icon}</span>
                                    </div>
                                </div>

                                {/* Label */}
                                <p className="text-white text-xs md:text-sm font-semibold text-center leading-tight">
                                    {perk.label}
                                </p>
                                </motion.div>
                            ))}
                            </div>
                        </div>
                        </motion.div>

                    </div>
                </section>

                {/* Open Positions Section */}

                <div className="text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{once:true}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
                    >
                        Open Positions
                    </motion.h1>

                    <motion.p
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='text-center mb-16'
                        >
                        <span className='text-gray-600'>Find your next career opportunity in AI engineering and data science.</span>
                    </motion.p>
                </div>

            </main>

        
        </>
    )
}