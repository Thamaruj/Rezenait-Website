"use client";

import {motion} from 'framer-motion';
interface Review {
  _id: string;
  name: string;
  role?: string;
  reviewText: string;
  imageUrl?: string;
}


export default function Reviews({ reviews }: { reviews: Review[] }){
    return(
        <>
        
            <main className='text-center mx-w-full pt-10 pb-10, md:pt-20'>
                <div>
                    <motion.h1 
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-[#3643D9] via-[#040E77] to-[#3643D9] bg-clip-text text-transparent md:leading-tight"
                    >
                        What Our Clients Say
                    </motion.h1>

                    <motion.p
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className='text-center mb-16'
                        >
                        <span className='text-gray-600'>Trusted by leading organizations across industries</span>
                    </motion.p>

                </div>

                <div className="flex flex-wrap justify-center gap-8 md:py-25 py-15 px-10 bg-[#03285F] md:px-10">
                    {reviews.map((review, index) => (
                    <motion.div
                        key={review._id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration:0.6, delay: index * 0.1 }}
                       className="w-full md:w-[calc(33.333%-2rem)] min-w-[300px] bg-gray-100 p-8 rounded-3xl shadow-sm border border-blue-500 flex flex-col justify-between"
                    >
                        <div>
                        <div className="text-blue-500 text-4xl mb-4 "></div>
                        <p className="text-gray-700 leading-relaxed mb-8 italic">
                            " {review.reviewText} "
                        </p>
                        </div>

                        <div className="flex items-center gap-4">
                        {review.imageUrl ? (
                            <img 
                            src={review.imageUrl} 
                            alt={review.name} 
                            className="w-12 h-12 rounded-full object-cover border-2 border-blue-50"
                            />
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            {review.name.charAt(0)}
                            </div>
                        )}
                        <div>
                            <h4 className="font-bold text-blue-900 leading-none">{review.name}</h4>
                            <p className="text-xs text-start text-gray-500 mt-1">{review.role}</p>
                        </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
                
            </main>
        
        
        </>
    )
}