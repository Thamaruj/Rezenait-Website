"use client" 

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Clock, User, ChevronRight } from "lucide-react";
import { PortableText } from "@portabletext/react";

export default function BlogContent({initialBlogs, categories}:any){
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Blogs");
    const [visibleCount, setVisibleCount] = useState(9);
    const [selectedBlog, setSelectedBlog] = useState<any>(null);

    // --- SCROLL LOCK LOGIC ---
    useEffect(() => {
        if (selectedBlog) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedBlog]);

      // --- FILTER LOGIC ---
    const filteredBlogs = initialBlogs.filter((blog: any) => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All Blogs" || blog.mainCategory === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredBlogs = filteredBlogs.filter((b: any) => b.isFeatured);
    const regularBlogs = filteredBlogs.filter((b: any) => !b.isFeatured);

    return(
        <>
            <div
                className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-no-repeat bg-cover bg-center" 
                style={{backgroundImage: "url('/Header-Bg.svg')"}}
            >

            </div>

            <main className="mx-7 max-w-full md:px-12 pt-5 md:pt-10 pb-32">

                {/* Header Text Section */}
                <div className="max-w-4xl">
                
                {/* Animated Main Headline */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                >
                    AI Engineering Insights & Blog
                </motion.h1>
                
                {/* Animated Sub-headline */}
                {/* delay: 0.2 ensures it smoothly follows the main headline */}
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-6 max-w-3xl md:text-lg text-white/90 leading-relaxed font-light"
                >
                     Expert insights on AI engineering, data solutions, and intelligent automation. Stay updated with the latest trends, best practices, and technical deep-dives from our team.                </motion.p>

                </div>

               
                
                {/* SEARCH & FILTER SECTION */}
                         
                <section className="max-w-full z-10 mt-30 bg-[#DCDCDC]/25 ">
                    <div className="max-w-full mx-auto my-10  p-4 md:p-6 rounded-3xl md:rounded-2xl flex flex-col md:flex-row gap-4 items-center border border-white shadow-sm">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                        type="text"
                        placeholder="Search Blog"
                        className="w-full pl-12 pr-6 py-3.5 rounded-full border border-blue-500 shadow-inner bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-0"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full scroll-smooth ">
                        {["All Blogs", ...categories].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2.5 rounded-full whitespace-nowrap text-sm border font-medium transition-all cursor-pointer ${
                            activeCategory === cat ? "bg-[#0066FF] text-white shadow-md" : "bg-white text-gray-500 border border-gray-100"
                            }`}
                        >
                            {cat}
                        </button>
                        ))}
                    </div>
                    </div>
                </section>

                {/* FEATURED SECTION */}
                <section className="relative z-10 max-w-full mx-auto mb-16 space-y-10">
                <div className="flex items-center gap-3">
                    <span className="bg-[#0066FF] text-white px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider">
                    Featured Articles
                    </span>
                    <div className="h-[1px] flex-grow bg-gray-200" />
                </div>

                {featuredBlogs.map((blog: any, idx: number) => (
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={blog._id}
                    // Fixed height of 450px on laptop (md), auto on mobile
                    className={`flex flex-col ${
                        idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } md:h-[400px] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative group`}
                    >
                    {/* TEXT SIDE */}
                    <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center h-full">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight ">
                        {blog.title}
                        </h2>
                        
                        <p className="text-gray-500 mb-6 line-clamp-3 text-base md:text-lg">
                        {blog.intro}
                        </p>

                        <div className="flex gap-4 text-gray-400 text-sm mb-6">
                        <span className="flex items-center gap-1.5">
                            <User size={16} /> {blog.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={16} /> {blog.readTime}
                        </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                        {blog.topics?.slice(0, 3).map((topic: string) => (
                            <span
                            key={topic}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] md:text-xs font-medium border border-blue-100"
                            >
                            {topic}
                            </span>
                        ))}
                        </div>

                        <button
                        onClick={() => setSelectedBlog(blog)}
                        className="px-5 py-3 cursor-pointer border border-blue-500 text-blue-500 font-light rounded-xl w-full md:w-fit hover:font-semibold transition-all active:scale-95"
                        >
                        Read Article
                        </button>
                    </div>

                    {/* IMAGE SIDE */}
                    <div className="md:w-1/2 h-64 md:h-full overflow-hidden">
                        <img
                        src={blog.imageUrl}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        alt={blog.title}
                        />
                    </div>

                    {/* Main Category Label */}
                    {/* Added z-10 and adjusted rounding logic slightly for the flip */}
                    <div
                        className={`absolute bottom-0 z-10 ${
                        idx % 2 === 0 ? "left-0 rounded-tr-xl" : "right-0 rounded-tl-xl"
                        } bg-[#374151] text-white px-6 py-2 text-xs  uppercase tracking-widest`}
                    >
                        {blog.mainCategory}
                    </div>
                    </motion.div>
                ))}
                </section>



                {/* REGULAR GRID */}
                <section className="relative z-10 max-w-full mx-auto ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {regularBlogs.slice(0, visibleCount).map((blog: any) => (
                        <motion.div layout key={blog._id} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm flex flex-col hover:shadow-xl transition-all">
                        <div className="h-56 overflow-hidden relative">
                            <img src={blog.imageUrl} className="w-full h-full object-cover" alt="" />
                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0066FF] px-3 py-1 rounded-full text-[10px] ">
                            {blog.mainCategory}
                            </span>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{blog.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-3 font-light leading-relaxed">{blog.intro}</p>
                                            <div className="flex gap-2 mb-6">
                            {blog.topics?.map((topic: string) => (
                            <span key={topic} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium border border-blue-100">{topic}</span>
                            ))}
                        </div>
                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                            <button onClick={() => setSelectedBlog(blog)} className="flex items-center gap-1 text-blue-500 cursor-pointer text-sm hover:scale-[1.02] transition duration-300">
                                Read More <ChevronRight size={16} />
                            </button>
                            <span className="text-gray-400 text-xs font-medium">{blog.readTime}</span>
                            </div>
                        </div>
                        </motion.div>
                    ))}
                    </div>

                    {visibleCount < regularBlogs.length && (
                    <div className="flex justify-center mt-16">
                        <button 
                        onClick={() => setVisibleCount(v => v + 9)}
                        className="px-12 py-4 bg-[#0066FF] text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95"
                        >
                        Load More Articles
                        </button>
                    </div>
                    )}
                </section>



                {/* ARTICLE MODAL */}
                <AnimatePresence>
                    {selectedBlog && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSelectedBlog(null)}
                        className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-2 md:p-6"
                    >
                        <motion.div 
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white w-full max-w-5xl h-full md:max-h-[90vh] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col relative shadow-2xl"
                        >
                        <button 
                            onClick={() => setSelectedBlog(null)}
                            className="absolute top-4 right-4 md:top-8 md:right-8 z-20 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>

                        <div className="overflow-y-auto custom-scrollbar p-6 md:p-20">
                            <div className="max-w-3xl mx-auto">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest">
                                {selectedBlog.mainCategory}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                                {selectedBlog.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 mb-12 py-6 border-y border-gray-100">
                                <div className="flex items-center gap-2 text-slate-500 font-medium"><User size={18} className="text-blue-500"/> {selectedBlog.author}</div>
                                <div className="flex items-center gap-2 text-slate-500 font-medium"><Clock size={18} className="text-blue-500"/> {selectedBlog.readTime}</div>
                            </div>
                            <img src={selectedBlog.imageUrl} className="w-full aspect-video object-cover rounded-[2rem] mb-12 shadow-lg" alt="" />
                            <div className="prose prose-blue prose-lg max-w-none text-slate-600 leading-relaxed font-light">
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
    )
}