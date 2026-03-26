"use client";

import { motion } from "framer-motion";

const industries = [
  { name: "Industry", icon: "/TestIconInIndustry.svg" },
  { name: "Healthcare", icon: "/TestIconInIndustry.svg" },
  { name: "Education", icon: "/TestIconInIndustry.svg" },
  { name: "Retail", icon: "/TestIconInIndustry.svg" },
  { name: "Logistics", icon: "/TestIconInIndustry.svg" },
  { name: "Technology", icon: "/TestIconInIndustry.svg" },
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
        className="w-full bg-cover bg-center bg-no-repeat py-15 md:py-20 overflow-hidden"
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
              className="w-50 h-50 md:h-80 md:w-80 flex flex-col items-center justify-center text-xl font-semibold shrink-0 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: "url('/IndustriesNoiseCard.svg')" }}
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.name}
                className="w-30 h-30 md:w-40 md:h-40 mb-4"
              />

              {/* Name */}
              <p className=" text-lg font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}