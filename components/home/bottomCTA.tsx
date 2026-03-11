"use client";

import {motion} from 'framer-motion';
import Link from 'next/link';

export default function bottomCTA(){
    return(
        <>
        
            <main className='text-center px-5 py-12 mx-w-full md:px-12 bg-gradient-to-b from-[#01A1FD] to-[#C0E2F6]'>
                <div>
                    <motion.h1 
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl text-white md:text-7xl font-bold md:leading-tight py-5"
                    >
                        Ready to Build Intelligent Systems?
                    </motion.h1>

                    <motion.p
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-white  md:leading-tight"
                    >
                        Let's discuss how our AI engineering expertise can transform your business. Schedule a free consultation with our team.
                    </motion.p>

                    <Link href={"/contact"}>
                        <motion.button 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="mt-10 gap-2 rounded bg-white px-6 py-3 text-sm text-blue-600 shadow-md transition-all duration-300 ease-out hover:bg-blue-700 hover:text-white hover:shadow-lg md:hover:-translate-y-1 hover:scale-[1.02] cursor-pointer active:scale-95"
                            >
                            Book a Free AI Consultation
                        </motion.button>
                    </Link>

                </div>
            </main>
        
        
        </>
    )
}