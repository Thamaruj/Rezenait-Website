"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Stat {
  value: string;
  label: string;
}

interface Project {
  _id: string;
  title: string;
  slug: string;
  featured: boolean;
  order: number;
  badge: string;
  badgeColor: string;
  imageUrl: string | null;
  tags: string[];
  shortDescription: string;
  fullDescription: string | null;
  stats: Stat[];
  challenge: string | null;
  solution: string | null;
  outcome: string | null;
}

interface PortfolioContentProps {
  featuredProjects: Project[];
  moreProjects: Project[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

const INITIAL_VISIBLE = 6;
const LOAD_MORE_COUNT = 3;

// ─── Stat Badge ───────────────────────────────────────────────────────────────

function StatBadge({ stat, dark = false }: { stat: Stat; dark?: boolean }) {
  return (
    <div className={`rounded-xl p-3 flex flex-col gap-1 ${dark ? "bg-[#040E77]" : "bg-[#3643D9]/90"}`}>
      <span className="text-white font-bold text-xl md:text-2xl leading-none">{stat.value}</span>
      <span className="text-white/70 text-[11px] leading-snug">{stat.label}</span>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="relative bg-white w-full sm:max-w-2xl rounded-t-3xl sm:rounded-2xl overflow-hidden max-h-[92vh] flex flex-col"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
      >
        {/* Image header */}
        <div className="relative h-44 sm:h-56 flex-shrink-0 bg-gradient-to-br from-[#040E77] to-[#3643D9]">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_#fff_0%,_transparent_70%)]" />
          <div className="absolute top-4 left-4">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.badgeColor}`}>
              {project.badge}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 transition flex items-center justify-center text-white"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-2xl text-white">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags?.map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-5 py-5 space-y-5">
          {/* Stats grid */}
          {project.stats?.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {project.stats.map((s, i) => (
                <StatBadge key={s.label} stat={s} dark={i % 2 === 1} />
              ))}
            </div>
          )}

          {/* Description */}
          {project.fullDescription && (
            <p className="text-gray-600 text-sm leading-relaxed">{project.fullDescription}</p>
          )}

          {/* Challenge / Solution / Outcome */}
          {[
            { label: "Challenge", value: project.challenge },
            { label: "Solution", value: project.solution },
            { label: "Outcome", value: project.outcome },
          ]
            .filter((b) => b.value)
            .map((block) => (
              <div key={block.label}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#3643D9] mb-1">
                  {block.label}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{block.value}</p>
              </div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Featured Card ────────────────────────────────────────────────────────────

function FeaturedCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative rounded-2xl border border-gray-100 shadow-lg overflow-hidden bg-white flex flex-col md:flex-row"
      style={{ minHeight: 260 }}
    >
      {/* Image side */}
      <div
        className={`relative w-full md:w-[42%] min-h-[200px] md:min-h-0 flex-shrink-0 bg-gradient-to-br from-[#040E77] to-[#3643D9] ${
          !isEven ? "md:order-last" : ""
        }`}
      >
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_bottom_left,_#fff_0%,_transparent_60%)]" />
        <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full border-2 border-white/20" />
        <div className="absolute top-6 left-6 w-10 h-10 rounded-lg border border-white/30 rotate-12" />
      </div>

      {/* Content side */}
      <div className="flex-1 p-5 md:p-7 flex flex-col justify-between">
        <div>
          <span className={`text-xs font-light px-3 py-1 rounded-full ${project.badgeColor}`}>
            {project.badge}
          </span>
          <h3 className="mt-3 text-xl md:text-2xl font-bold text-gray-900">{project.title}</h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags?.map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-[#3643D9]/10 text-[#3643D9] font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.stats?.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            {project.stats.map((s, i) => (
              <StatBadge key={s.label} stat={s} dark={i % 2 === 1} />
            ))}
          </div>
        )}

        <button
          onClick={onOpen}
          className="mt-4 self-start text-sm text-[#3643D9] hover:text-[#040E77] flex items-center gap-1.5 transition-colors group"
        >
          View Case Study
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </button>
      </div>
    </motion.div>
  );
}

// ─── Grid Card ────────────────────────────────────────────────────────────────

function GridCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="group rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white flex flex-col cursor-pointer"
      onClick={onOpen}
    >
      {/* Image area */}
      <div className="relative h-36 bg-gradient-to-br from-[#040E77] to-[#3643D9] flex-shrink-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_#fff_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between">
          <h3 className="text-white font-semibold text-sm leading-snug max-w-[70%]">{project.title}</h3>
          <span className={`text-[10px]  px-2 py-0.5 rounded-full ${project.badgeColor} flex-shrink-0`}>
            {project.badge}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">{project.shortDescription}</p>
        <button className="mt-3 text-xs text-[#3643D9] flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn More <span>→</span>
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PortfolioContent({ featuredProjects, moreProjects }: PortfolioContentProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const visibleMore = moreProjects.slice(0, visibleCount);
  const hasMore = visibleCount < moreProjects.length;

  return (
    <>
      {/* Scroll-locked modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <div
        className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Header-Bg.svg')" }}
      />

      <main className="mx-7 max-w-full md:px-12 pt-5 md:pt-10 pb-32">

        {/* Header */}
        <div className="max-w-4xl md:mb-25">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extralight text-white tracking-tight"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-3xl md:text-lg text-white/100 leading-relaxed font-light"
          >
            Explore how we've helped enterprises across industries transform their operations
            with AI engineering, data solutions, and intelligent automation.
          </motion.p>
        </div>

        {/* ── Featured Projects ── */}
        <section className="py-10 md:py-16">
          <div className="text-center mb-10 md:mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl pb-3 md:text-7xl font-extralight bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent "
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-gray-600"
            >
              Transformative AI solutions delivering measurable business impact
            </motion.p>
          </div>

          <div className="space-y-6">
            {featuredProjects.map((p, i) => (
              <FeaturedCard key={p._id} project={p} index={i} onOpen={() => setSelectedProject(p)} />
            ))}
          </div>
        </section>

        {/* ── Discover More Projects ── */}
        <section className="py-10 md:py-16">
          <div className="text-center mb-10 md:mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-extralight bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent"
            >
              Discover More Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-gray-600"
            >
              Additional success stories across diverse industries
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {visibleMore.map((p, i) => (
                <GridCard key={p._id} project={p} index={i} onOpen={() => setSelectedProject(p)} />
              ))}
            </AnimatePresence>
          </div>

          {hasMore && (
            <div className="flex justify-center mt-10">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setVisibleCount((c) => c + LOAD_MORE_COUNT)}
                className="px-7 py-2.5 rounded-full border-2 border-[#3643D9] text-[#3643D9] font-semibold text-sm hover:bg-[#3643D9] hover:text-white transition-colors"
              >
                Load More →
              </motion.button>
            </div>
          )}
        </section>

      </main>
    </>
  );
}