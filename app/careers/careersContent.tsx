"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";

// --- Types ---
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

// --- Perk icons (unchanged) ---
const perks = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-cyan-400" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9l4 2m4-2a8 8 0 11-16 0 8 8 0 0116 0z" />
      </svg>
    ),
    label: "Work-Life Balance",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-cyan-400" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.607L5 14.5m14.8.5-1.57.393" />
      </svg>
    ),
    label: "Cutting-Edge Tech",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-cyan-400" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    label: "Collaborative Culture",
  },
];

// ─── Job Card ───────────────────────────────────────────────────────────────
function JobCard({ job, onApply }: { job: Job; onApply: (job: Job) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-start justify-between gap-6">

        {/* Left side */}
        <div className="flex items-start gap-4 flex-1">

          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            </svg>
          </div>

          <div className="flex-1">
            {/* Title */}
            <h3 className="text-2xl font-light text-gray-800">{job.title}</h3>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">
              {job.category && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                  </svg>
                  {job.category}
                </span>
              )}
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {job.location}
              </span>
              {job.type && (
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.type}
                </span>
              )}
            </div>

            {/* Requirements preview — first 2 only */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-1">
              {job.requirements.slice(0, 2).map((req, i) => (
                <span key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DF6C46] flex-shrink-0" />
                  {req}
                </span>
              ))}
              {job.requirements.length > 3 && (
                <span className="text-sm text-[#2563EB] font-medium mt-1">
                  +{job.requirements.length - 2} more requirements
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={() => onApply(job)}
          className="flex-shrink-0 flex items-center cursor-pointer gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-light px-5 py-3 rounded-xl transition-colors duration-200 group"
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

  // Lock body scroll while modal is open
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
      // Use FormData so the CV file is sent as a proper attachment
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
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between rounded-t-2xl z-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                {job.category && <span>{job.category}</span>}
                <span>·</span>
                <span>{job.location}</span>
                {job.type && <><span>·</span><span>{job.type}</span></>}
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-500"
            >
              ✕
            </button>
          </div>

          <div className="px-8 py-6 space-y-8">

            {/* Full Job Description */}
            {job.description && (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">About the Role</h3>
                <div className="text-gray-600 text-sm leading-relaxed prose prose-sm max-w-none">
                  <PortableText value={job.description} />
                </div>
              </div>
            )}

            {/* Requirements */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Key Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {job.requirements.map((req, i) => (
                  <span key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-1.5" />
                    {req}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100" />

            {/* Success state */}
            {status === "success" ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Application Submitted!</h3>
                <p className="text-sm text-gray-500">We'll review your application and get back to you soon.</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              /* Application Form */
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">Your Application</h3>

                {status === "error" && (
                  <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number <span className="text-red-400">*</span></label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 77 123 4567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition"
                    />
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload CV <span className="text-red-400">*</span></label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#2563EB] transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={(e) => setForm({ ...form, cv: e.target.files?.[0] ?? null })}
                        className="hidden"
                        id="cv-upload"
                      />
                      <label htmlFor="cv-upload" className="cursor-pointer">
                        {form.cv ? (
                          <div className="flex items-center justify-center gap-2 text-[#2563EB] font-medium text-sm">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {form.cv.name}
                          </div>
                        ) : (
                          <>
                            <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                            <p className="text-sm text-gray-500">
                              <span className="text-[#2563EB] font-medium">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
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
                    ) : (
                      "Submit Application"
                    )}
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

  // Filter jobs based on search — checks title, category, location
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
      {/* Modal */}
      {selectedJob && (
        <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}

      <div
        className="absolute top-0 left-0 w-full h-[400px] md:h-[450px] -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Header-Bg.svg')" }}
      />

      <main className="mx-7 max-w-full md:px-12 pt-5 md:pt-10 pb-32">

        {/* ── Everything above is UNCHANGED ── */}

        <div className="absolute top-0 left-0 w-full h-[400px] md:h-[450px] -z-10 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/Header-Bg.svg')" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extralight text-white tracking-tight"
        >
          Build the Future of AI with Rezenait
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-3xl md:text-lg text-white/90 leading-relaxed font-light"
        >
          Join our team of AI engineers and data scientists delivering cutting-edge solutions to enterprises worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-4"
        >
          <button className="group cursor-pointer flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-light text-blue-600 shadow-md transition-all duration-300 ease-out md:hover:bg-blue-600 md:hover:text-white md:hover:shadow-lg md:hover:-translate-y-1 active:scale-95">
            View Open Positions
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </button>
        </motion.div>

        {/* Why Join section */}
        <section className="px-6 md:px-16 py-20 mt-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl text-gray-700 font-light text-[#0A0E3C] mb-6">Why Join Rezenait?</h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                We're building the leading AI engineering company in Sri Lanka. Join us to work on challenging problems with cutting-edge technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 w-full"
            >
              <div className="rounded-2xl p-6 bg-gradient-to-br from-[#16ADF2] to-[#7ACAF8]">
                <div className="grid grid-cols-3 gap-4">
                  {perks.map((perk, index) => (
                    <motion.div
                      key={perk.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                      className="flex flex-col items-center gap-4"
                    >
                      <div className="w-full aspect-square rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <div className="relative w-14 h-14 flex items-center justify-center">
                          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" fill="none">
                            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#0D1B3E" stroke="#1E3A6E" strokeWidth="3" />
                          </svg>
                          <span className="relative z-10">{perk.icon}</span>
                        </div>
                      </div>
                      <p className="text-white text-xs md:text-sm font-semibold text-center leading-tight">{perk.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Open Positions heading (unchanged) ── */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-extralight bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
          >
            Open Positions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <span className="text-gray-600">Find your next career opportunity in AI engineering and data science.</span>
          </motion.p>
        </div>

        {/* ── NEW: Search Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-2xl px-5 py-4 mb-10 max-w-full mx-auto"
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
            <button onClick={() => setSearch("")} className="  text-gray-400 hover:text-gray-600 text-xs">
              Clear
            </button>
          )}
        </motion.div>

        {/* ── NEW: Job Cards ── */}
        <div className="space-y-4 max-w-7xl mx-auto">
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