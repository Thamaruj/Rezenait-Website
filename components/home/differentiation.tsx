"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const points = [
  {
    number: "01",
    title: "Problem-First,\nNot Product-First",
    description:
      "We hang our hat on problem solving — not trying to plug generic AI solutions into your business. Every engagement starts with deep discovery.",
    image: "/Test Image.webp",
  },
  {
    number: "02",
    title: "Data Driven,\nNot Model Driven",
    description:
      "Garbage in equals garbage out. Before any model is trained, we audit, clean, and architect the data infrastructure that makes intelligence possible.",
    image: "/Test Image.webp",
  },
  {
    number: "03",
    title: "From Experiments\nto Scalable Systems",
    description:
      "Proofs of concept that never ship are wasted potential. We build scalable AI/ML data pipelines designed for production from day one.",
    image: "/Test Image.webp",
  },
  {
    number: "04",
    title: "Strategic\nAI Partners",
    description:
      "We embed alongside your team. Deep collaboration, aligned incentives, and a shared commitment to your long-term business goals.",
    image: "/Test Image.webp",
  },
  {
    number: "05",
    title: "MVP\nFocused",
    description:
      "Speed to value is a competitive advantage. We ship fast, iterate faster, and keep scope ruthlessly tied to outcomes that matter.",
    image: "/Test Image.webp",
  },
  {
    number: "06",
    title: "Deep Domain\nExperience",
    description:
      "Our engineers have worked across finance, healthcare, logistics, and retail. Solutions engineered for real-world impact, not theoretical benchmarks.",
    image: "/Test Image.webp",
  },
];

// ── Single feature row ────────────────────────────────────────────────────────
function FeatureRow({ point, index }: { point: (typeof points)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 md:min-h-[360px] border-b border-gray-100 last:border-b-0"
    >
      {/* ── Image panel — always left ── */}
      <div className="relative overflow-hidden h-56 md:h-auto md:max-h-[360px] rounded-2xl md:rounded-none mx-4 md:mx-0 mt-6 md:mt-0">
        <motion.img
          src={point.image}
          alt={point.title}
          initial={{ scale: 1.08 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Text panel — always right ── */}
      <div className="relative flex flex-col justify-center px-6 md:px-16 py-8 md:py-16 bg-white">
        {/* Top rule + number */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8 origin-left"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#3643D9] uppercase">
            {point.number}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#3643D9]/40 to-transparent" />
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-light text-slate-900 leading-tight mb-6 whitespace-pre-line"
        >
          {point.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="text-gray-500 text-base md:text-lg leading-relaxed font-light max-w-sm"
        >
          {point.description}
        </motion.p>

        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#3643D9]/8 to-transparent rounded-tl-3xl" />
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
      <div className="border-t border-gray-100">
        {points.map((point, index) => (
          <FeatureRow key={index} point={point} index={index} />
        ))}
      </div>


    </section>
  );
}