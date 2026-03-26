"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface SuccessStory {
  _id: string;
  storyName: string;
  problem: string;
  solution: string;
  description: string;
  imageUrl: string;
}

export default function successStories({ stories }: { stories: SuccessStory[] }) {
  return (
    <section className="py-0 md:py-5">
      {/* 1. Header Section */}
      <div className="text-center px-6 ">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl mb-5 font-extralight bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
        >
          Our Success Stories
        </motion.h1>
      </div>

      {/* 2. Content Grid */}
      <div className="bg-[#DCDCDC]/25 py-10 md:mx-10 lg:mx-20 rounded-xl flex flex-wrap justify-center mx-5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stories?.map((story, index) => (
              <motion.div
                key={story._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm  flex flex-col group hover:shadow-md transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={story.imageUrl} 
                    alt={story.storyName} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Text Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg text-gray-700 mb-2 font-semibold leading-tight mb-4">
                    {story.storyName}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-1">
                        <span className="w-2 h-2 bg-[#DF6C46] rounded-full"></span>
                        Problem
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {story.problem}
                      </p>
                    </div>

                    <div className="pt-2">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-1">
                        <span className="w-2 h-2 bg-[#1bb9c4] rounded-full"></span>
                        Solution:
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {story.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='px-5 mb-5'>
                    <Link href={"/services"}>
                      <button className='group font-light text-sm flex items-center gap-2 py-1 px-3 rounded-lg  text-blue-500 border cursor-pointer transition-all duration-300 ease-out md:hover:-translate-y-1 hover:scale-[1.02] cursor-pointer active:scale-95'>
                          Learn More
                          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                              &rarr;
                          </span>
                      </button>
                    </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Link href={"/portfolio"}
        className='text-center items-center py-8'>
            <button className='group font-light flex items-center gap-2 py-2 px-3 rounded-lg mt-5 text-blue-500 border cursor-pointer transition-all duration-300 ease-out md:hover:-translate-y-1 hover:scale-[1.02] cursor-pointer active:scale-95'>
                Discover More Stories
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                </span>
            </button>
        </Link>
      </div>
    </section>
  );
}