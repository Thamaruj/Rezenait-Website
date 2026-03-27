"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const points = [
  {
    number: "01",
    title: "Problem-First,\nNot Product-First",
    description:
      "We hang our hat on problem solving — not trying to plug generic AI solutions into your business. Every engagement starts with deep discovery.",
    image: "/Images/istockphoto-1407529180-612x612.jpg",
  },
  {
    number: "02",
    title: "Data Driven,\nNot Model Driven",
    description:
      "Garbage-in equals garbage-out. Before any model is trained, we audit, clean, and architect the data infrastructure that makes intelligence possible.",
    image: "/Images/istockphoto-1979289147-612x612.jpg",
  },
  {
    number: "03",
    title: "From Experiments\nto Scalable Systems",
    description:
      "Proofs of concept that never ship are wasted potential. We build scalable AI/ML data pipelines designed for production from day one.",
    image: "/Images/istockphoto-2148123501-612x612.jpg",
  },
  {
    number: "04",
    title: "Strategic\nAI Partners",
    description:
      "We embed alongside your team. Deep collaboration, aligned incentives, and a shared commitment to your long-term business goals.",
    image: "/Images/istockphoto-2179714888-612x612.jpg",
  },
  {
    number: "05",
    title: "MVP\nFocused",
    description:
      "Speed to value is a competitive advantage. We ship fast, iterate faster, and keep scope ruthlessly tied to outcomes that matter.",
    image: "/Images/istockphoto-1459104303-612x612.jpg",
  },
  {
    number: "06",
    title: "Deep Domain\nExperience",
    description:
      "Our engineers have worked across finance, healthcare, logistics, and retail. Solutions engineered for real-world impact, not theoretical benchmarks.",
    image: "/Images/DeepDomain.jpg",
  },
];

// ── Single feature row ────────────────────────────────────────────────────────
function FeatureRow({ point, index }: { point: (typeof points)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-[40%_60%] border-b border-gray-100 last:border-b-0 py-4"
    >
      {/* ── Image panel with title overlay ── */}
      <div className="relative overflow-hidden h-48 md:h-[180px] mx-4 md:mx-0  md:mt-0 md:rounded-l-xl rounded">
        <motion.img
          src={point.image}
          alt={point.title}
          initial={{ scale: 1.06 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        {/* Bottom-to-top overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        {/* Title pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl font-light text-white leading-snug "
          >
            {point.title}
          </motion.h3>
        </div>
      </div>

      {/* ── Text panel — description only ── */}
      <div className="flex flex-col justify-center px-6 md:px-10 py-6 md:py-8 md:bg-gray-100 md:rounded-r-xl rounded-lg bg-gradient-to-t from-gray-100 to-transparent">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-gray-500 text-base leading-relaxed font-light flex items-start"
        >
          <span className="inline-block w-2 h-2 mt-2 rounded-full bg-[#d16404] mr-2 flex-shrink-0" />
          {point.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function Differentiation() {
  return (
    <section className="overflow-hidden">

      {/* Header */}
      <div className="text-center max-w-full md:px-12 pt-10 pb-16 md:pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-extralight bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight px-4"
        >
          What Sets Us Apart
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-4 text-gray-500 px-4"
        >
          Your trusted AI consultancy partner
        </motion.p>
      </div>

      {/* Feature rows */}
      <div className="border-t border-gray-100 mx-6 md:mx-16 lg:mx-24">
        {points.map((point, index) => (
          <FeatureRow key={index} point={point} index={index} />
        ))}
      </div>

    </section>
  );
}