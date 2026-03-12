"use client"; // Required for Framer Motion animations to run in the browser

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import Link from "next/link";
import BottomCTA from "@/components/home/bottomCTA";

const services = [
  {
    title: "AI/ML Engineering",
    description: "Cutting-edge artificial intelligence solutions that drive business transformation through specialized model development.",
    iconColor: "from-blue-600 to-indigo-700",
    shadowColor: "shadow-blue-200",
    icon: "/Services Page/TestIcon.svg",
    link:"/",
  },
  {
    title: "Data Strategy & Engineering",
    description: "Build a robust data foundation for AI and analytics excellence with scalable data pipeline development.",
    iconColor: "from-emerald-500 to-teal-700",
    shadowColor: "shadow-emerald-200",
    icon: "/Services Page/TestIcon.svg",
    link:"/",
  },
  {
    title: "Analytics & Business Intelligence",
    description: "Transform data into actionable insights and strategic advantage through real-time monitoring systems.",
    iconColor: "from-orange-500 to-red-700",
    shadowColor: "shadow-orange-200",
    icon: "/Services Page/TestIcon.svg",
    link:"/",
  },
];

const technologies = [
  { name: "Python", src: "/Services Page/TechStack/python.svg", category:"Development" },
  { name: "FastAPI", src: "/Services Page/TechStack/fastAPI.svg", category:"Development"  },
  { name: "NestJS", src: "/Services Page/TechStack/nestJS.svg", category:"Development"  },
  { name: "React", src: "/Services Page/TechStack/react.svg", category:"Development"  },
  { name: "PostgreSQL", src:'/Services Page/TechStack/postgreSQL.svg', category:"Data" },
  { name: "MySQL", src:'Services Page/TechStack/mySQL.svg', category:"Data"},
  { name: "MongoDB", src:'Services Page/TechStack/mongoDB.svg', category:"Data"},
  { name: "ApacheSpark", src:'Services Page/TechStack/apacheSpark.svg', category:"Data"},
  { name: "ApacheAirflow", src:'Services Page/TechStack/apacheAirflow.svg', category:"Data"},
  { name: "ApacheHive", src:'Services Page/TechStack/hive.svg', category:"Data"},
  { name: "Snowflake", src:'Services Page/TechStack/snowflake.svg', category:"CoreML"},
  { name: "ScikitLearn", src:'Services Page/TechStack/scikitlearn.svg', category:"CoreML"},
  { name: "PyTorch", src:'Services Page/TechStack/pyTorch.svg', category:"CoreML"},
  { name: "LightGBM", src:'Services Page/TechStack/lightGBM.svg', category:"CoreML"},
  { name: "MLFlow", src:'Services Page/TechStack/mlFLow.svg', category:"CoreML"},
  { name: "LangChain.svg", src:'Services Page/TechStack/langChain.svg', category:"GenAI"},
  { name: "LangGraph", src:'Services Page/TechStack/langGraph.svg', category:"GenAI"},
  { name: "CrewAI", src:'Services Page/TechStack/crewAI.svg', category:"GenAI"},
  { name: "HuggingFace", src:'Services Page/TechStack/huggingFace.svg', category:"GenAI"},
  { name: "Llama", src:'Services Page/TechStack/llama.svg', category:"GenAI"},
  { name: "ChatGPT", src:'Services Page/TechStack/chatGPT.svg', category:"GenAI"},
  { name: "Claude", src:'Services Page/TechStack/claude.svg', category:"GenAI"},
  { name: "QDrant", src:'Services Page/TechStack/qdrant.svg', category:"GenAI"},
  { name: "Unstructured", src:'Services Page/TechStack/unstructured.svg', category:"GenAI"},
  { name: "Langsmith", src:'Services Page/TechStack/langsmith.svg', category:"GenAI"},
  { name: "AgentOps", src:'Services Page/TechStack/agentops.svg', category:"GenAI"},
  { name: "TruLens", src:'Services Page/TechStack/trulens.svg', category:"GenAI"},
  { name: "AWS", src:'Services Page/TechStack/aws.svg', category:"Cloud & CI/CD"},
  { name: "GitHub", src:'Services Page/TechStack/gitHub.svg', category:"Cloud & CI/CD"},
  { name: "Kubernetes", src:'Services Page/TechStack/kubernetes.svg', category:"Cloud & CI/CD"},
  { name: "Docker", src:'Services Page/TechStack/docker.svg', category:"Cloud & CI/CD"},
  { name: "Terraform", src:'Services Page/TechStack/terraform.svg', category:"Cloud & CI/CD"},
  { name: "Tableau", src:'Services Page/TechStack/tableau.svg', category:"Visualization"},
  { name: "Streamlit", src:'Services Page/TechStack/streamlit.svg', category:"Visualization"},
  { name: "PowerBI", src:'Services Page/TechStack/powerBI.svg', category:"Visualization"},
];


const ai_ml_servicesDetails = [
  // Generative AI
  {
    serviceCategory: "Generative AI",
    serviceName: "Large Language Models (LLMs)",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Generative AI",
    serviceName: "Agentic AI",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Generative AI",
    serviceName: "RAG (Retrieval-Augmented Generation)",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Generative AI",
    serviceName: "Natural Language Processing",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Generative AI",
    serviceName: "Document Intelligence",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Generative AI",
    serviceName: "Conversational AI (Chatbots)",
    src: "Services Page/TechStack/powerBI.svg"
  },

  // Core Machine Learning
  {
    serviceCategory: "Core Machine Learning",
    serviceName: "Machine Learning",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Core Machine Learning",
    serviceName: "Predictive Analytics",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Core Machine Learning",
    serviceName: "Time Series Prediction",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Core Machine Learning",
    serviceName: "Recommendation Systems",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Core Machine Learning",
    serviceName: "MLOps",
    src: "Services Page/TechStack/powerBI.svg"
  },

  // Advanced Deep Learning
  {
    serviceCategory: "Advanced Deep Learning",
    serviceName: "Deep Learning",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Advanced Deep Learning",
    serviceName: "Computer Vision",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Advanced Deep Learning",
    serviceName: "Voice AI",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "Advanced Deep Learning",
    serviceName: "Multimodal AI",
    src: "Services Page/TechStack/powerBI.svg"
  }
];

const data_engineering_servicesDetails = [
  {
    serviceCategory: "N/A",
    serviceName: "Data Pipeline Design and Orchestration",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "N/A",
    serviceName: "ETL/ELT Processes",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "N/A",
    serviceName: "Data Warehousing",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "N/A",
    serviceName: "Data Governance",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "N/A",
    serviceName: "Data/ML Infrastructure",
    src: "Services Page/TechStack/powerBI.svg"
  }
];

const analytics_bi_servicesDetails = [
  {
    serviceCategory: "N/A",
    serviceName: "Descriptive & Predictive Analytics",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "N/A",
    serviceName: "Dashboards & Visualization",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "N/A",
    serviceName: "Reporting",
    src: "Services Page/TechStack/powerBI.svg"
  },
  {
    serviceCategory: "N/A",
    serviceName: "KPI & Performance Tracking",
    src: "Services Page/TechStack/powerBI.svg"
  }
];


function ServiceSection({ category, services, setActive }: { category: string, services: any[], setActive: (cat: string) => void }) {
  const ref = useRef(null);
  // This triggers when the section is in the middle of the screen
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) setActive(category);
  }, [isInView, category, setActive]);

  return (
    <div ref={ref} id={category.replace(/\s+/g, '-')} className="mb-32 last:mb-0 scroll-mt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service: any, index: number) => {
          const isOddTotal = services.length % 2 !== 0;
          const isLastItem = index === services.length - 1;
          const centerClass = (isOddTotal && isLastItem) ? "md:col-span-2 md:w-[calc(50%-0.625rem)] md:justify-self-center w-full" : "w-full";

          return (
            <motion.div
              key={index}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className={`flex items-center gap-5 p-7 bg-white rounded-3xl border border-slate-100 shadow-sm group transition-all ${centerClass}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <img src={service.src} alt="" className="w-6 h-6 object-contain" />
              </div>
              <h4 className="font-bold text-slate-800 text-lg leading-tight">{service.serviceName}</h4>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}



export default function ServicesPage() {
  // We double the array so the end of the first set matches the start of the second set perfectly
  const duplicatedTech = [...technologies, ...technologies];

  const [activeCategory, setActiveCategory] = useState("Generative AI");

  // Group AI/ML services by category
  const groupedServices = useMemo(() => {
    return ai_ml_servicesDetails.reduce((acc, current) => {
      if (!acc[current.serviceCategory]) acc[current.serviceCategory] = [];
      acc[current.serviceCategory].push(current);
      return acc;
    }, {} as Record<string, typeof ai_ml_servicesDetails>);
  }, []);

  const categories = Object.keys(groupedServices);

  return (
    <>
      {/* Header Background Layer */}
      <div 
        className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Header-Bg.svg')" }}
      />

      <main className="mx-7 max-w-full md:px-12 md:pt-10 mt-5 pb-32 items-center">
        
        {/* Header Text Section */}
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            AI Engineering Services
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-3xl md:text-lg text-white/100 leading-relaxed font-light"
          >
            Comprehensive AI consultancy and data engineering solutions delivered by Sri Lanka's leading AI engineering company
          </motion.p>
        </div>

        {/* Services Grid Section */}
        <div className="mt-32 relative z-10">
          <div className="flex flex-wrap justify-center gap-8 cursor-pointer">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-10 rounded-xl border border-[#007AA3] shadow-sm 
                           w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] 
                           hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group hover:bg-[#007AA3]/80 "
              >
                <img
                    src={service.icon}
                    className={`mb-8 w-16 h-16 rounded-2xl 
                                flex items-center justify-center  
                                group-hover:scale-110 transition-transform duration-300`}
                    alt={`${service.title}`}
                />
                
                <h3 className="text-2xl font-bold text-gray-600 mb-4 leading-tight group-hover:text-gray-300">
                  {service.title}
                </h3>
                
                <p className="text-lg text-slate-500 leading-relaxed font-light group-hover:text-white">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies Headline */}
        <div>
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once:true}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-7xl pt-20 text-center font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
            >
                Technologies & Tools We Master
            </motion.h1>

            <motion.p
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                className='text-center mb-16 py-5'
                >
                <span className='text-gray-600'>Industry-leading platforms and frameworks powering our solutions</span>
            </motion.p>
        </div>

        {/* Infinite Loop Section */}
        <div className="bg-[#DCDCDC]/25 rounded-xl">
          <div className="relative w-full overflow-hidden py-10">
            <motion.div
              className="flex w-max items-center gap-10 md:gap-24" // w-max ensures no wrapping
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 80, // Adjust speed here (higher = slower)
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedTech.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-20 h-20 md:w-28 md:h-28 hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative w-full overflow-hidden py-10 ">
            <motion.div
              className="flex w-max items-center gap-10 md:gap-24" // w-max ensures no wrapping
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 80, // Adjust speed here (higher = slower)
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedTech.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-20 h-20 md:w-28 md:h-28 hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* AI/ML Section */}
        <section 
        className="text-center py-15 md:py-20">
          <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
          >
              AI/ML Engineering
          </motion.h1>

          <motion.p
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='text-center py-5'
              >
              <span className='text-gray-600'>From generative AI to advanced deep learning, we build intelligent systems that solve complex challenges and create competitive advantages.</span>
          </motion.p>
        </section>

        {/* Data Strategy & Engineering */}
        <section 
        className="text-center py-15 md:py-20">
          <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
          >
              Data Strategy & Engineering 
          </motion.h1>

          <motion.p
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='text-center mb-16 py-5'
              >
              <span className='text-gray-600'>Strategic data architecture and engineering that transforms raw data into a valuable enterprise asset, enabling AI initiatives and data-driven decisions.</span>
          </motion.p>
        </section>

        {/* Analytics & BI*/}
        <section 
        className="text-center py-15 md:py-20">
          <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
          >
              Analytics & BI
          </motion.h1>

          <motion.p
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='text-center py-5'
              >
              <span className='text-gray-600'>Comprehensive analytics and BI solutions that empower data-driven decision making with real-time insights and intuitive visualizations.</span>
          </motion.p>
        </section>



    <div className="max-w-full mx-auto flex flex-col lg:flex-row gap-10 py-20 bg-[#DCDCDC]/25 rounded-2xl">
      
      {/* LEFT SIDE: STICKY NAVIGATOR */}
      <div className="lg:w-1/3">
        <div className="lg:sticky lg:top-40 space-y-20">
          

          <nav className="flex flex-col gap-10 pl-8 bg-blue-900 p-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => document.getElementById(cat.replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-left text-3xl font-bold transition-all duration-500 ${
                  activeCategory === cat ? "text-[#16ADF2] translate-x-4" : "text-slate-300 hover:text-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* RIGHT SIDE: SCROLLING CONTENT */}
      <div className="lg:w-2/3">
        {Object.entries(groupedServices).map(([category, services]) => (
          <ServiceSection 
            key={category} 
            category={category} 
            services={services} 
            setActive={setActiveCategory} 
          />
        ))}
      </div>
    </div>

      </main>

      <BottomCTA/>
    </>
  );
}