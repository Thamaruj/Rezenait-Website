"use client";

import { motion } from "framer-motion";
import { Target, Eye } from 'lucide-react';



const coreValues = [
  {
    value: "Innovation First",
    description:"We stay at the cutting edge of AI research, constantly exploring new techniques in agentic AI development and RAG systems.",
    icon:"/icons/coreValue.svg"
  },
  {
    value: "Enterprise Quality",
    description:"Every solution is built with production-grade architecture, security, and scalability from day one.",
    icon:"/icons/coreValue.svg"
  },
  {
    value: "Results Driven",
    description:"We measure success by business outcomes: revenue growth, cost savings, and competitive advantage.",
    icon:"/icons/coreValue.svg"
  },
  {
    value: "Partnership Mindset",
    description:"Your success is our success. We work as an extension of your team, not just a vendor.",
    icon:"/icons/coreValue.svg"
  },
]

export default function AboutPage() {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: "url('/Header-Bg.svg')" }}
      ></div>

      <main className="mx-7 max-w-full md:px-12 pt-5 md:pt-10 pb-32 ">
        {/* Added mx-auto and text-center here! */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center md:mb-25">
          
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

        <section className=" w-full p-10  flex items-center justify-center overflow-hidden bg-[#DCDCDC]/25 rounded-3xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            
            {/* Mission Card */}
            <div className="bg-white/70 backdrop-blur-sm border border-blue-500 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col items-start transition-all hover:shadow-md group">
              <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-blue-50  transition-colors">
                <Target className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-700 mb-6 tracking-tight">Our Mission</h2>
              <p className=" leading-relaxed text-gray-600 ">
                To democratize access to world-class AI engineering expertise, helping startups and enterprises across Sri Lanka and beyond build intelligent systems that drive measurable business impact. We believe every organization should have access to cutting-edge AI consultancy and data engineering solutions.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white/70 backdrop-blur-sm border border-blue-500 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col items-start transition-all hover:shadow-md group">
              <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-blue-50  transition-colors">
                <Eye className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-700 mb-6 tracking-tight">Our Vision</h2>
              <p className=" leading-relaxed text-gray-600 ">
                To be recognized as the leading AI engineering company in South Asia, known for delivering enterprise-grade RAG development services, agentic AI solutions, and scalable data infrastructure that powers the next generation of intelligent businesses.
              </p>
            </div>

            </motion.div>
        </section>

        <section className=" items-center justify-center ">
            <div className="text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{once:true}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl py-10 md:text-7xl font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
                >
                    Our Core Values
                </motion.h1>
            </div>


          
            <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 p-10 bg-[#DCDCDC]/25 rounded-3xl">
              {coreValues.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-[#66D3FF] p-8 rounded-3xl flex flex-col items-center text-center shadow-lg border border-white/20 transition-transform hover:-translate-y-2 duration-300"
                >
                  {/* Circular Icon Container */}
                  <div className="w-16 h-16 mb-6 rounded-3xl  flex items-center justify-center ">
                    <img 
                      src={item.icon} 
                      alt={item.value} 
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">
                    {item.value}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-lg font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          
          </section>
            <div className="text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{once:true}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl py-10 md:text-7xl font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
                >
                    Meet Our Team
                </motion.h1>
            </div>
        <section>



        </section>

    

      </main>
    </>
  );
}