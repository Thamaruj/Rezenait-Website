"use client";

import {motion} from 'framer-motion';

export default function differentiation(){
    return(
        <>
        
            <main className='text-center mx-w-full md:px-12 pt-10 pb-10, md:pt-20'>
                <div>
                    <motion.h1 
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
                    >
                        What Sets Us Apart
                    </motion.h1>

                    <motion.p
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className='text-center mb-16'
                        >
                        <span className='text-gray-600'>Your trusted AI consultancy partner </span>
                    </motion.p>

                </div>
            </main>
        
        
        </>
    )
}