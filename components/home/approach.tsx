"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "A deep dive into business challenges, data ecosystems, and strategic objectives to clearly define the right problem before building the solution.",
    image: "https://picsum.photos/1200/800?random=1",
  },
  {
    number: "02",
    title: "Data Strategy",
    description: "Assessment, structuring, and alignment of data to create a scalable base for intelligent, long-term growth.",
    image: "https://picsum.photos/1200/800?random=2",
  },
  {
    number: "03",
    title: "Solution Design & Prototyping",
    description: "Architecting practical AI solutions and developing rapid prototypes to test feasibility and business impact early.",
    image: "https://picsum.photos/1200/800?random=3",
  },
  {
    number: "04",
    title: "Model Development",
    description: "Training and optimizing models tailored to real-world use cases with accuracy, robustness, and efficiency in mind.",
    image: "https://picsum.photos/1200/800?random=4",
  },{
    number:"05",
    title: "Deployment",
    description: "Seamless integration into existing systems with a focus on security, scalability, and operational stability.",
    image: "https://picsum.photos/1200/800?random=5"
  },{
    number:"06",
    title: "Monitoring",
    description: "Continuous tracking, refinement, and optimization to maintain accuracy and adapt to evolving business needs.",
    image: "https://picsum.photos/1200/800?random=6"
  }
];

// Custom Counter Component for the "pop" effect
function ScrollingNumber({ target }: { target: string }) {
  return (
    <motion.span
      initial={{ opacity: 0.2, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-3xl  text-[#040E77] block mb-2"
    >
      {target}
    </motion.span>
  );
}

export default function Approach() {
  const containerRef = useRef(null);
  
  // Track scroll progress for the continuous line based on the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // RESOLVED: Bouncy animation fixed with high damping and stiffness
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.0001
  });

  return (
    <section ref={containerRef} className="relative text-slate-900 md:pb-15 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:py-10 py-14 md:grid-cols-2 lg:px-12">
        
        {/* LEFT SIDE: STICKY HEADER */}
        {/* h-fit is critical here to allow the right side to scroll past it */}
        <div className="md:sticky md:top-40 h-fit self-start md:py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-extralight bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent leading-tight">
              Our Proven Approach
            </h2>
            <p className="mt-8 max-w-md md:text-lg text-slate-600 leading-relaxed">
              A structured, results-focused methodology designed to align business strategy 
              with intelligent systems ensuring clarity, speed, and lasting value.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE: SCROLLING SECTION */}
        <div className="relative space-y-8 md:pt-5">
          
          {/* THE CONTINUOUS LINE (Progress Tracker) */}
        <div className="absolute left-0 md:-left-10 top-5 bottom-[-30] w-[2px] bg-gray-100/20 hidden md:block">
          <motion.div 
            style={{ 
              scaleY, 
              originY: 0,
              // FIX: Forces the browser to keep the line sharp on the GPU
              willChange: "transform", 
              WebkitBackfaceVisibility: "hidden",
              perspective: 1000
            }}
            className="w-full h-full bg-[#3643D9] shadow-[0_0_10px_rgba(54,67,217,0.5)]"
          />
        </div>

          {steps.map((step, index) => (
            <div key={index} className="relative bg-[#DCDCDC]/25 rounded-xl md:p-5 p-4">
              
              {/* Header: Number & Title */}
              <div className="">
                <ScrollingNumber target={step.number} />
                <motion.h3 
                initial={{ opacity: 0.2, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8 }}
                className="text-2xl  text-gray-700 tracking-tight">
                  
                  {step.title}
                </motion.h3>
              </div>

              {/* Step Card */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden rounded-xl border border-slate-100 shadow-2xl shadow-blue-900/5 group bg-white"
              >
                
              {/*
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={step.image}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={step.title}
                  />
                  
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              */}

              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}