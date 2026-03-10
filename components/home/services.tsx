"use client";

import {motion} from 'framer-motion';
import Link from 'next/link';
import { HiCheck } from "react-icons/hi";

export default function services(){
    return(
        <>
        
            <main className='text-center mx-w-full pt-10  md:pt-20'>
                <div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{once:true}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
                    >
                        AI Solutions That Power Your Growth
                    </motion.h1>

                    <motion.p
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        className='text-center mb-16'
                        >
                        <span className='text-gray-600'>Comprehensive AI and data engineering solutions designed to accelerate your digital transformation</span>
                    </motion.p>
                </div>
                

                <div className="bg-[#DCDCDC]/25 py-20 md:mx-20 rounded-xl">
                    <div className="mx-auto max-w-7xl px-5 md:px-0">
                        
                        <div className="grid gap-10 md:grid-cols-3 justify-items-center">

                        {/* Card 1 */}
                            <div className="rounded-xl bg-white p-8 w-full shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out border border-blue-600">
                               <img src="/Icons/BrainIcon.svg" alt="AI Icon " className='mb-5'  />
                                <h3 className="text-2xl font-semibold text-gray-700 text-bold text-start">AI/ML Engineering</h3>
                                <p className="mt-4 text-gray-700 text-start font-light">
                                    End-to-end machine learning and AI solutions from generative AI and LLMs to production-ready ML systems. Includes RAG, Agentic AI, computer vision, NLP, and MLOps
                                </p>

                                <ul className='text-start pt-5 text-gray-500 text-sm font-light'>
                                    <li className="flex items-center gap-3">
                                        <HiCheck className="text-blue-600 text-xl" />
                                        Generative AI & LLMs
                                    </li>
                                    
                                    <li className="flex items-center gap-3">
                                        <HiCheck className="text-blue-600 text-xl" />
                                        Core ML & Predictive Analytics
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <HiCheck className="text-blue-600 text-xl" />
                                        Deep Learning & Computer Vision
                                    </li>
                                    
                                </ul>

                                    <Link href={"/services"}>
                                        <button className='group font-light flex items-center gap-2 py-2 px-3 rounded-lg mt-5 text-blue-500 border cursor-pointer transition-all duration-300 ease-out md:hover:-translate-y-1 hover:scale-[1.02] cursor-pointer active:scale-95'>
                                            Learn More
                                            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                                                &rarr;
                                            </span>
                                        </button>
                                    </Link>

                            </div>
                        
                            {/* Card 2 */}
                            <div className="rounded-xl bg-white p-8 w-full shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out border border-blue-600">
                               <img src="/Icons/DatabaseIcon.svg" alt="AI Icon " className='mb-5'  />
                                <h3 className="text-2xl font-semibold text-gray-700 text-bold text-start">Data & Strategy Engineering</h3>
                                <p className="mt-4 text-gray-700 text-start font-light md:mb-5">
                                    Build a robust data foundation with strategic data architecture and engineering. Scalable pipelines, modern data warehousing, and governance frameworks.
                                </p>

                                <ul className='text-start pt-5 text-gray-500 text-sm font-light'>
                                    <li className="flex items-center gap-3">
                                        <HiCheck className="text-blue-600 text-xl" />
                                        Data Pipeline & Orchestration
                                    </li>
                                    
                                    <li className="flex items-center gap-3">
                                        <HiCheck className="text-blue-600 text-xl" />
                                        ETL/ELT & Warehousing
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <HiCheck className="text-blue-600 text-xl" />
                                        Data Governance & Infrastructure
                                    </li>
                                    
                                </ul>

                                    <Link href={"/services"}>
                                        <button className='group font-light flex items-center gap-2 py-2 px-3 rounded-lg mt-5 text-blue-500 border cursor-pointer transition-all duration-300 ease-out md:hover:-translate-y-1 hover:scale-[1.02] cursor-pointer active:scale-95'>
                                            Learn More
                                            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                                                &rarr;
                                            </span>
                                        </button>
                                    </Link>

                            </div>



                            {/* Card 3 */}
                            <div className="rounded-xl bg-white p-8 w-full shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out border border-blue-600">
                               <img src="/Icons/AnalyticsIcon.svg" alt="AI Icon " className='mb-5'  />
                                <h3 className="text-2xl font-semibold text-gray-700 text-bold text-start">Analytics & BI</h3>
                                <p className="mt-4 text-gray-700 text-start font-light md:mb-5">
                                    Transform data into actionable insights with comprehensive analytics and BI solutions. Real-time dashboards, predictive analytics, and performance tracking.                                </p>

                                <ul className='text-start pt-5 text-gray-500 text-sm font-light'>
                                    <li className="flex items-center gap-3">
                                        <HiCheck className="text-blue-600 text-xl" />
                                        Descriptive & Predictive Analytics
                                    </li>
                                    
                                    <li className="flex items-center gap-3">
                                        <HiCheck className="text-blue-600 text-xl" />
                                        Dashboards & Visualization
                                    </li>

                                    <li className="flex items-center gap-3">
                                        <HiCheck className="text-blue-600 text-xl" />
                                       KPI & Performance Tracking
                                    </li>
                                    
                                </ul>

                                    <Link href={"/services"}>
                                        <button className='group font-light flex items-center gap-2 py-2 px-3 rounded-lg mt-5 text-blue-500 border cursor-pointer transition-all duration-300 ease-out md:hover:-translate-y-1 hover:scale-[1.02] cursor-pointer active:scale-95'>
                                            Learn More
                                            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                                                &rarr;
                                            </span>
                                        </button>
                                    </Link>

                            </div>



                        </div>

                    </div>
                </div>
            </main>
        
        
        </>
    )
}