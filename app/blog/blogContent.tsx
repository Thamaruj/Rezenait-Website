"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Clock, User, ChevronRight } from "lucide-react";
import { PortableText } from "@portabletext/react";

export default function BlogContent({ initialBlogs, categories }: any) {
  const [searchTerm, setSearchTerm]     = useState("");
  const [activeCategory, setActiveCategory] = useState("All Blogs");
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  // ── Scroll lock ──────────────────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = selectedBlog ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedBlog]);

  // ── Filter logic ─────────────────────────────────────────────────────────────
  const filteredBlogs = initialBlogs.filter((blog: any) => {
    const matchesSearch   = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All Blogs" || blog.mainCategory === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlogs = filteredBlogs.filter((b: any) =>  b.isFeatured);
  const regularBlogs  = filteredBlogs.filter((b: any) => !b.isFeatured);
  const hasNoResults  = filteredBlogs.length === 0;

  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Header-Bg.svg')" }}
      />

      <main className="mx-4 md:mx-7 max-w-full md:px-12 pt-5 md:pt-10 pb-32">

        {/* ── Header ── */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extralight text-white tracking-tight"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-3xl md:text-lg text-white/90 leading-relaxed font-light"
          >
            Expert insights on AI engineering, data solutions, and intelligent automation.
            Stay updated with the latest trends, best practices, and technical deep-dives from our team.
          </motion.p>
        </div>

        {/* ── Search & Filter ── */}
        <section className="max-w-full z-10 mt-28 md:mt-30 bg-[#DCDCDC]/25">
          <div className="max-w-full mx-auto my-10 p-4 md:p-6 rounded-3xl md:rounded-2xl flex flex-col md:flex-row gap-4 items-center border border-white shadow-sm">
            <div className="relative w-full md:w-96 flex-shrink-0">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                className="w-full pl-12 pr-10 py-3.5 rounded-full border border-blue-500 shadow-inner bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-0 text-sm"
                onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(9); }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={15} />
                </button>
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar w-full scroll-smooth">
              {["All Blogs", ...categories].map((cat: string) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setVisibleCount(9); }}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm border font-medium transition-all cursor-pointer flex-shrink-0 ${
                    activeCategory === cat
                      ? "bg-[#0066FF] text-white shadow-md border-[#0066FF]"
                      : "bg-white text-gray-500 border-gray-100 hover:border-blue-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── No results ── */}
        {hasNoResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-5">
              <Search className="w-7 h-7 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              We couldn't find anything matching{" "}
              {searchTerm && <span className="font-medium text-gray-600">"{searchTerm}"</span>}
              {searchTerm && activeCategory !== "All Blogs" && " in "}
              {activeCategory !== "All Blogs" && (
                <span className="font-medium text-gray-600">{activeCategory}</span>
              )}.
            </p>
            <button
              onClick={() => { setSearchTerm(""); setActiveCategory("All Blogs"); }}
              className="mt-5 px-6 py-2.5 rounded-full bg-[#0066FF] text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* ── Featured section ── */}
        {!hasNoResults && featuredBlogs.length > 0 && (
          <section className="relative z-10 max-w-full mx-auto mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-[#0066FF] text-white px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider">
                Featured Articles
              </span>
              <div className="h-[1px] flex-grow bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredBlogs.map((blog: any, idx: number) => (
                <BlogCard key={blog._id} blog={blog} index={idx} featured onOpen={() => setSelectedBlog(blog)} />
              ))}
            </div>
          </section>
        )}

        {/* ── Regular grid ── */}
        {!hasNoResults && regularBlogs.length > 0 && (
          <section className="relative z-10 max-w-full mx-auto">
            {featuredBlogs.length > 0 && (
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-gray-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider">
                  All Articles
                </span>
                <div className="h-[1px] flex-grow bg-gray-200" />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regularBlogs.slice(0, visibleCount).map((blog: any, idx: number) => (
                <BlogCard key={blog._id} blog={blog} index={idx} onOpen={() => setSelectedBlog(blog)} />
              ))}
            </div>

            {visibleCount < regularBlogs.length && (
              <div className="flex justify-center mt-14">
                <button
                  onClick={() => setVisibleCount((v) => v + 9)}
                  className="px-10 py-4 bg-[#0066FF] text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 text-sm md:text-base"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </section>
        )}

        {/* ── Article Modal ── */}
        <AnimatePresence>
          {selectedBlog && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-6"
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-5xl h-[95vh] sm:max-h-[90vh] rounded-t-[2rem] sm:rounded-[3rem] overflow-hidden flex flex-col relative shadow-2xl"
              >
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-gray-100 p-2.5 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X size={18} className="text-gray-600" />
                </button>

                <div className="overflow-y-auto p-5 md:p-20">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">
                        {selectedBlog.mainCategory}
                      </span>
                    </div>
                    <h1 className="text-2xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
                      {selectedBlog.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 md:mb-12 py-5 border-y border-gray-100">
                      <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                        <User size={16} className="text-blue-500" /> {selectedBlog.author}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                        <Clock size={16} className="text-blue-500" /> {selectedBlog.readTime}
                      </div>
                    </div>
                    <img
                      src={selectedBlog.imageUrl}
                      className="w-full aspect-video object-cover rounded-2xl md:rounded-[2rem] mb-8 md:mb-12 shadow-lg"
                      alt={selectedBlog.title}
                    />
                    <div className="prose prose-blue prose-base md:prose-lg max-w-none text-slate-600 leading-relaxed font-light">
                      <PortableText value={selectedBlog.content} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </>
  );
}

// ── Shared Blog Card ──────────────────────────────────────────────────────────

function BlogCard({
  blog,
  index,
  featured = false,
  onOpen,
}: {
  blog: any;
  index: number;
  featured?: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm flex flex-col hover:shadow-xl transition-all group"
    >
      {/* Image */}
      <div className="h-48 sm:h-56 overflow-hidden relative flex-shrink-0">
        <img
          src={blog.imageUrl}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          alt={blog.title}
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-[#0066FF] px-3 py-1 rounded-full text-[10px] font-medium border border-blue-100">
            {blog.mainCategory}
          </span>
          {featured && (
            <span className="bg-[#0066FF] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-7 flex flex-col flex-grow">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-2 leading-snug">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3 font-light leading-relaxed flex-1">
          {blog.intro}
        </p>

        {/* Topics */}
        {blog.topics?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {blog.topics.slice(0, 3).map((topic: string) => (
              <span
                key={topic}
                className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-medium border border-blue-100"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
          <button
            onClick={onOpen}
            className="flex items-center gap-1 text-blue-500 cursor-pointer text-sm font-medium hover:gap-2 transition-all duration-200"
          >
            Read More <ChevronRight size={15} />
          </button>
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <span className="flex items-center gap-1"><User size={12} /> {blog.author}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}