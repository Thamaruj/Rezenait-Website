"use client";
import { motion } from 'framer-motion';


const points = [
  {
    icon: "/Icons/Difff.svg",
    title: "Problem-First, Not Product-First",
    description: "We Hang our Hat on Problem Solving, not Trying to Plug Generic AI Solutions.",
    image: "/Test Image.webp" 
  },
  {
    icon: "/Icons/Difff.svg",
    title: "Data Driven, not Model Driven",
    description: "Garbage IN = Garbage OUT",
    image: "/Test Image.webp"
  },
  {
    icon:"/Icons/Difff.svg",
    title: "From Experiments to Scalable Systems",
    description: "Scalable AI/ML Data pipeline development",
    image: "/Test Image.webp"
  },
  {
    icon:"/Icons/Difff.svg",
    title: "Strategic AI Partners",
    description: "Deep Collaboration, and Aligning with Your Business Goals",
    image: "/Test Image.webp"
  },
  {
    icon:"/Icons/Difff.svg",
    title: "MVP Focused",
    description: "We Ship Fast",
    image: "/Test Image.webp"
  },
  {
    icon:"/Icons/Difff.svg",
    title: "Deep Domain Experience",
    description: "Solutions Engineered for Real-World Impact",
    image: "/Test Image.webp"
  }
];

export default function Differentiation() {
    return (
        <section className="bg-[#fcfcfc] overflow-hidden">
            {/* 1. Header Section (Your Existing Structure) */}
            <main className='text-center max-w-full md:px-12 pt-10 pb-10 md:pt-20'>
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
                        className='text-center mb-16 px-4'
                    >
                        <span className='text-gray-600'>Your trusted AI consultancy partner</span>
                    </motion.p>
                </div>
            </main>

            {/* 2. Alternating Content Section */}
            <div className="w-full">
                {points.map((point, index) => (
                    <div 
                        key={index}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full border-t border-gray-100`}
                    >
                        {/* Image Block */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{once:true}}
                            className="w-full md:w-1/2 aspect-video md:aspect-auto"
                        >
                            <img 
                                src={point.image} 
                                alt={point.title} 
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>

                        {/* Text Block */}
                        <div
                        className="w-full md:w-1/2 flex flex-col justify-center p-10 md:p-20 bg-gray-50/50 relative">

                            {/* Subtle Grain Overlay (Optional) */}
                            <div className="absolute inset-0 opacity-[0.25] z-5 pointer-events-none bg-[url('/noise.svg')]" />
                            
                            <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className='z-5'
                            >
                                <div className="max-w-md mx-auto md:mx-0 z-6">
                                    <img 
                                        src={point.icon} 
                                        alt="" 
                                        className='w-24 h-24'
                                    />
                                    <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {point.description}
                                    </p>
                               </div>
                            </motion.div>
                            
                       
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}