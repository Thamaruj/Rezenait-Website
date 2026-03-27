"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface Job {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  location: string;
  type?: string;
  description?: any[];
  requirements: string[];
}

interface CareersPageProps {
  jobs: Job[];
}

const perks = [
  {
    id: 1,
    icon: "/Icons/meditation-round-svgrepo-com.svg",
    label: "Work-Life Balance",
    description: "Flexible schedules and a culture that respects your time.",
  },
  {
    id: 2,
    icon: "/Icons/black-hole-svgrepo-com.svg",
    label: "Cutting-Edge Tech",
    description: "Work with modern tools and evolving AI technologies.",
  },
  {
    id: 3,
    icon: "/Icons/Collaborative.svg",
    label: "Collaborative Culture",
    description: "A supportive team environment where ideas are valued.",
  },
];

// ─── Job Card ────────────────────────────────────────────────────────────────
function JobCard({ job, onApply }: { job: Job; onApply: (job: Job) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Stack vertically on mobile, row on sm+ */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">

        {/* Icon + content row */}
        <div className="flex items-start gap-4 flex-1">
          {/* Icon */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#2563EB] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            </svg>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl font-light text-gray-800 leading-tight">{job.title}</h3>

            {/* Meta row — wraps naturally on mobile */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-gray-500">
              {job.category && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                  </svg>
                  {job.category}
                </span>
              )}
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {job.location}
              </span>
              {job.type && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.type}
                </span>
              )}
            </div>

            {/* Requirements preview */}
            <div className="mt-3 flex flex-col gap-1">
              {job.requirements.slice(0, 2).map((req, i) => (
                <span key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DF6C46] flex-shrink-0 mt-1.5" />
                  {req}
                </span>
              ))}
              {job.requirements.length > 2 && (
                <span className="text-sm text-[#2563EB] font-medium mt-1">
                  +{job.requirements.length - 2} more requirements
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Apply Button — full width on mobile, auto on sm+ */}
        <button
          onClick={() => onApply(job)}
          className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center cursor-pointer gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-light px-5 py-3 rounded-xl transition-colors duration-200 group"
        >
          Apply Now
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </motion.div>
  );
}

// ─── Application Modal ───────────────────────────────────────────────────────
function ApplicationModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", cv: null as File | null });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.cv) return;
    setStatus("loading");
    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("jobTitle", job.title);
      data.append("cv", form.cv);
      const res = await fetch("/api/careers", { method: "POST", body: data });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:max-w-4xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between rounded-t-3xl sm:rounded-t-2xl z-10">
            <div className="min-w-0 pr-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{job.title}</h2>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mt-1 text-xs sm:text-sm text-gray-500">
                {job.category && <span>{job.category}</span>}
                <span>·</span>
                <span>{job.location}</span>
                {job.type && <><span>·</span><span>{job.type}</span></>}
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-500 flex-shrink-0"
            >
              ✕
            </button>
          </div>

          <div className="px-5 sm:px-8 py-5 sm:py-6 space-y-6 sm:space-y-8">
            {/* Job Description */}
            {job.description && (
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">About the Role</h3>
                <div className="text-gray-600 text-sm leading-relaxed prose prose-sm max-w-none">
                  <PortableText value={job.description} />
                </div>
              </div>
            )}

            {/* Requirements */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Key Requirements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {job.requirements.map((req, i) => (
                  <span key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-1.5" />
                    {req}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {status === "success" ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Application Submitted!</h3>
                <p className="text-sm text-gray-500">We'll review your application and get back to you soon.</p>
                <button onClick={onClose} className="mt-4 px-6 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition-colors">
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">Your Application</h3>

                {status === "error" && (
                  <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input
                      type="text" required placeholder="John Doe" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                    <input
                      type="email" required placeholder="john@example.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number <span className="text-red-400">*</span></label>
                    <input
                      type="tel" required placeholder="+94 77 123 4567" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload CV <span className="text-red-400">*</span></label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 sm:p-6 text-center hover:border-[#2563EB] transition-colors">
                      <input
                        type="file" accept=".pdf,.doc,.docx" required
                        onChange={(e) => setForm({ ...form, cv: e.target.files?.[0] ?? null })}
                        className="hidden" id="cv-upload"
                      />
                      <label htmlFor="cv-upload" className="cursor-pointer">
                        {form.cv ? (
                          <div className="flex items-center justify-center gap-2 text-[#2563EB] font-medium text-sm">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="truncate max-w-[200px]">{form.cv.name}</span>
                          </div>
                        ) : (
                          <>
                            <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                            <p className="text-sm text-gray-500">
                              <span className="text-[#2563EB] font-medium">Tap to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit" disabled={status === "loading"}
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting...
                      </>
                    ) : "Submit Application"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function CareersPage({ jobs = [] }: CareersPageProps) {
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = jobs.filter((job) => {
    const q = search.toLowerCase();
    return (
      job.title.toLowerCase().includes(q) ||
      job.category?.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {selectedJob && (
        <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}

      <div
        className="absolute top-0 left-0 w-full h-[400px] md:h-[450px] -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Header-Bg.svg')" }}
      />

      <main className="px-5 sm:px-8 md:px-12 pt-5 md:pt-10 pb-32 max-w-full">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl font-extralight text-white tracking-tight leading-tight"
        >
          Build the Future of AI with Rezenait
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-light"
        >
          Join our team of AI engineers and data scientists delivering cutting-edge solutions to enterprises worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-4"
        >
          <Link href={"/careers#open-positions"}>
          <button className="group cursor-pointer flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-light text-blue-600 shadow-md transition-all duration-300 ease-out md:hover:bg-blue-600 md:hover:text-white md:hover:shadow-lg md:hover:-translate-y-1 active:scale-95"
          >
            View Open Positions
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </button>
          </Link>
        </motion.div>

        {/* Why Join section */}
        <section className="mt-32 sm:mt-40 py-8 sm:py-10 px-5 sm:px-10 md:px-16 bg-[#DCDCDC]/25 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 shrink-0 w-full"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#0A0E3C] mb-4 sm:mb-6">Why Join Rezenait?</h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm">
                We're building the leading AI engineering company in Sri Lanka. Join us to work on challenging problems with cutting-edge technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-[1.4] w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {perks.map((perk, index) => (
                  <motion.div
                    key={perk.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="bg-white p-5 sm:p-6 rounded-2xl flex flex-col items-center text-center shadow-md border border-white/20 hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="w-14 h-14 mb-4 rounded-2xl flex items-center justify-center">
                      <img src={perk.icon} alt={perk.label} className="w-9 h-9" />
                    </div>
                    <h3 className="text-gray-700 text-sm font-semibold tracking-tight">{perk.label}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed mt-2">{perk.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* Open Positions */}
        <div className="text-center mt-16 sm:mt-20 mb-6" id="open-positions">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-extralight bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent leading-tight md:leading-tight"
          >
            Open Positions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-600 mt-3 mb-10 sm:mb-16 text-sm sm:text-base"
          >
            Find your next career opportunity in AI engineering and data science.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 mb-6 sm:mb-10"
        >
          <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by title, location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          {search && (
            <button onClick={() => setSearch("")} className="text-gray-400 hover:text-gray-600 text-xs flex-shrink-0">
              Clear
            </button>
          )}
        </motion.div>

        {/* Job Cards */}
        <div className="space-y-4 md:mx-20">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} onApply={setSelectedJob} />
            ))
          ) : (
            <div className="text-center py-16 text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm">No positions found matching <span className="font-medium text-gray-500">"{search}"</span></p>
              <button onClick={() => setSearch("")} className="mt-3 text-[#2563EB] text-sm hover:underline">Clear search</button>
            </div>
          )}
        </div>

      </main>
    </>
  );
}