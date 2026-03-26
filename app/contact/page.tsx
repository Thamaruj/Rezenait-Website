"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contacts = [
  {
    icon: <Mail />,
    title: "Email",
    val: "hello@rezenait.com",
    link: "mailto:hello@rezenait.com",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: <Phone />,
    title: "Phone",
    val: "+94 11 234 5678",
    link: "tel:+94112345678",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: <MapPin />,
    title: "Location",
    val: "Colombo, Sri Lanka",
    sub: "Serving clients globally",
    link: "https://maps.google.com/?q=Colombo,Sri Lanka",
    color: "bg-blue-500/10 text-blue-600",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", company: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Header-Bg.svg')" }}
      />

      <main className="mx-7 max-w-full md:px-12 pt-5 md:pt-10">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-6xl font-extralight text-white tracking-tight"
          >
            Let's Build Something Intelligent
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-3xl md:text-lg text-white/100 leading-relaxed font-light"
          >
            Schedule a free consultation to discuss your AI engineering needs. Our team
            will help you identify opportunities and build a roadmap for success.
          </motion.p>
        </div>

        <div className="max-w-full mx-auto mt-10 md:mt-15 py-10 md:py-20">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* LEFT: Contact info */}
            <div className="lg:w-5/12 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-5xl font-light text-gray-700 mb-6">Connect With Us</h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                  We'd love to hear from you. Whether you have questions, feedback, or
                  partnership ideas, our team is here to help.
                </p>
              </motion.div>

              <div className="space-y-10">
                {contacts.map((item, i) => (
                  <a key={i} href={item.link}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-6 group border my-8 border-blue-200 p-4 bg-blue-100/5 rounded-xl hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
                    >
                      <div className={`p-4 rounded-2xl transition-transform duration-300 ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg text-slate-800 mb-1">{item.title}</h3>
                        <p className="text-slate-600 font-light">{item.val}</p>
                        {item.sub && <p className="text-slate-400 text-sm">{item.sub}</p>}
                      </div>
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="lg:w-7/12 w-full bg-[#DCDCDC]/25 p-8 md:p-14 rounded-2xl border border-blue-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-light text-gray-700 mb-10">
                  Schedule Your Consultation
                </h3>

                {/* Success message */}
                {status === "success" && (
                  <div className="mb-6 px-5 py-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm">
                    ✓ Message sent! We'll get back to you shortly.
                  </div>
                )}

                {/* Error message */}
                {status === "error" && (
                  <div className="mb-6 px-5 py-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm text-slate-700 ml-1 tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-7 py-4 rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm text-slate-700 ml-1 tracking-wider">Company</label>
                      <input
                        type="text"
                        placeholder="Your Company Name"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-7 py-4 rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm text-slate-700 ml-1 tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-7 py-4 rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm text-slate-700 ml-1 tracking-wider">Project Description *</label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your project goals..."
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-7 py-4 rounded-2xl bg-slate-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status !== "loading" ? { scale: 1.02, y: -2 } : {}}
                    className="w-full  cursor-pointer bg-blue-400 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Schedule Consultation
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}