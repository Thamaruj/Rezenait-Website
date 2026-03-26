"use client";

import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";

interface Review {
  _id: string;
  name: string;
  role?: string;
  reviewText: string;
  imageUrl?: string;
}

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const controls = useAnimation();
  const x = useMotionValue(0);

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  const startAnimation = () => {
    controls.start({
      x: "-33.33%",
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section className="overflow-hidden py-10 md:py-20 ">
      {/* Header */}
      <div className="text-center max-w-full px-6 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-extralight bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent"
        >
          What Our Clients Say
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-gray-600"
        >
          Trusted by leading organizations across industries
        </motion.p>
      </div>

      {/* Marquee */}
      <div
        className="relative flex items-center bg-[#00BBFF]/10 md:bg-[#E1F0FF] py-10 md:py-10 overflow-hidden"
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => startAnimation()}
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 z-10 md:bg-gradient-to-r from-[#5BC3FF] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 z-10 md:bg-gradient-to-l from-[#5BC3FF] to-transparent pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-8"
          animate={controls}
          style={{ x }}
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review._id}-${index}`}
              className="w-[300px] md:w-[500px] whitespace-normal bg-white p-8 rounded-3xl shadow-2xl border border-blue-400 flex flex-col justify-between shrink-0 hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <span className="text-4xl text-blue-900 font-serif block mb-2 opacity-100 font-bold">
                  “
                </span>

                <p className="text-gray-700 leading-relaxed mb-8 italic text-sm md:text-lg">
                  {review.reviewText}
                </p>

              </div>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                {review.imageUrl ? (
                  <img
                    src={review.imageUrl}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-50"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">
                    {review.name.charAt(0)}
                  </div>
                )}

                <div className="text-left overflow-hidden">
                  <h4 className="font-bold text-blue-950 truncate">
                    {review.name}
                  </h4>

                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider truncate">
                    {review.role}
                  </p>

                  
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}