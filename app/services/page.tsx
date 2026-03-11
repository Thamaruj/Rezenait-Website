"use client"; // Required for Framer Motion animations to run in the browser

import { motion } from "framer-motion";
import Link from "next/link";

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

export default function ServicesPage() {
  // We double the array so the end of the first set matches the start of the second set perfectly
  const duplicatedTech = [...technologies, ...technologies];

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

      </main>
    </>
  );
}