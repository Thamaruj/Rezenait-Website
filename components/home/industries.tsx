"use client";

import { motion } from "framer-motion";

const industries = [
  { name: "Restaurant", icon: "Services Page/Home-service-restaurent.svg" },
  { name: "Retail", icon: "Services Page/Home-service-retail.svg" },
  { name: "Edtech", icon: "Services Page/Home-service-education.svg" },
  { name: "Telco", icon: "Services Page/Home-service-telco.svg" },
  { name: "Fintech", icon: "Services Page/Home-service-fintech.svg" },
  { name: "Travel & Tourism", icon: "Services Page/Home-service-travel.svg" },
];

export default function Industries() {
  const duplicatedIndustries = [...industries, ...industries];

  return (
    <section className="py-10 md:py-15">

      {/* Header */}
      <div className="text-center px-6 md:px-12 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-extralight bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent"
        >
          Industries We Serve
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-gray-600"
        >
          Deep expertise across diverse sectors
        </motion.p>
      </div>

      {/* Background section */}
      <div
        className="w-full max-h-[380px] bg-cover bg-center bg-no-repeat py-10 overflow-hidden"
        style={{ backgroundImage: "url('/IndustriesWeServe-bg.svg')" }}
      >
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedIndustries.map((item, index) => (
            <div
              key={index}
              className="w-50 h-50 md:h-60 md:w-60 flex flex-col items-center justify-center text-xl font-semibold shrink-0 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: "url('/IndustriesNoiseCard.svg')" }}
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.name}
                className="w-20 h-20 md:w-30 md:h-30 mb-4"
              />

              {/* Name */}
              <p className=" text-lg md:text-2xl font-light">
                {item.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}