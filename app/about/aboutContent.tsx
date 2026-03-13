"use client";

import { motion } from "framer-motion";
import { Target, Eye } from 'lucide-react';

// Define the interface for your team member data
interface TeamMember {
  name: string;
  position: string;
  experience: string;
  imageUrl: string;
}

const coreValues = [
  {
    value: "Innovation First",
    description: "We stay at the cutting edge of AI research, constantly exploring new techniques in agentic AI development and RAG systems.",
    icon: "/icons/coreValue.svg"
  },
  {
    value: "Enterprise Quality",
    description: "Every solution is built with production-grade architecture, security, and scalability from day one.",
    icon: "/icons/coreValue.svg"
  },
  {
    value: "Results Driven",
    description: "We measure success by business outcomes: revenue growth, cost savings, and competitive advantage.",
    icon: "/icons/coreValue.svg"
  },
  {
    value: "Partnership Mindset",
    description: "Your success is our success. We work as an extension of your team, not just a vendor.",
    icon: "/icons/coreValue.svg"
  },
]

// Note: Component renamed to AboutContent and accepts { team } prop
export default function AboutContent({ team }: { team: TeamMember[] }) {
  // Seamless loop trick: double the data
  const duplicatedTeam = [...team, ...team];

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: "url('/Header-Bg.svg')" }}
      ></div>

      <main className="mx-7 max-w-full md:px-12 pt-5 md:pt-10 pb-32 ">
        
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center md:mb-25">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            About Rezenait
          </motion.h1>

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

        {/* Mission & Vision */}
        <section className=" w-full p-10 flex items-center justify-center overflow-hidden bg-[#DCDCDC]/25 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white/70 backdrop-blur-sm border border-blue-500 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col items-start transition-all hover:shadow-md group">
              <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
                <Target className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-700 mb-6 tracking-tight">Our Mission</h2>
              <p className=" leading-relaxed text-gray-600 ">
                To democratize access to world-class AI engineering expertise, helping startups and enterprises across Sri Lanka and beyond build intelligent systems that drive measurable business impact. We believe every organization should have access to cutting-edge AI consultancy and data engineering solutions.]
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm border border-blue-500 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col items-start transition-all hover:shadow-md group">
              <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-blue-50">
                <Eye className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-700 mb-6 tracking-tight">Our Vision</h2>
              <p className=" leading-relaxed text-gray-600 ">
               To be recognized as the leading AI engineering company in South Asia, known for delivering enterprise-grade RAG development services, agentic AI solutions, and scalable data infrastructure that powers the next generation of intelligent businesses.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className=" items-center justify-center ">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                <div className="w-16 h-16 mb-6 rounded-3xl flex items-center justify-center ">
                  <img src={item.icon} alt={item.value} />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">{item.value}</h3>
                <p className="text-white/90 text-lg font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Marquee Section */}
        <section className="mt-20">
          <div className="text-center mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once:true}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent"
            >
              Meet Our Team
            </motion.h1>
          </div>

          <div className="relative flex overflow-hidden py-10 bg-[#DCDCDC]/25">
            <motion.div
              className="flex gap-8 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {duplicatedTeam.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px]  bg-white p-6 rounded-[2rem] shadow-md border border-blue-500 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-100">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                  <div className="text-start">
                    <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-[#097AC3] font-semibold text-sm uppercase my-2">{member.position}</p>
                    <span className="text-gray-700 text-sm font-light bg-slate-100 px-3 py-1 rounded-full">
                    {member.experience}
                    </span>
                    
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Edge Fades for the vanishing effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
        </section>
      </main>
    </>
  );
}