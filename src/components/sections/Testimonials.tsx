"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonials.module.css";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Business Owner",
    content: "The Kundli analysis was incredibly accurate. Shastri ji helped me understand the alignment of my stars for my new business venture. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Software Engineer",
    content: "I was confused about my career path, but the guidance I received was life-changing. The remedies suggested were simple and effective.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Amit Trivedi",
    role: "Educator",
    content: "Vastu consultation for my new home brought a lot of positive energy. The team is very professional and deep in their knowledge.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
            <span className={styles.topLabel}>Client Stories</span>
            <h2 className={styles.title}>What Our Seekers Say</h2>
        </div>

        <div className={styles.wrapper}>
          <AnimatePresence mode="wait">
            <motion.div 
              key={reviews[index].id}
              className={styles.card}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className={styles.quoteIcon} />
              <p className={styles.content}>"{reviews[index].content}"</p>
              
              <div className={styles.stars}>
                {[...Array(reviews[index].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--accent)" stroke="var(--accent)" />
                ))}
              </div>
              
              <div className={styles.userInfo}>
                <Image 
                  src={reviews[index].image} 
                  alt={reviews[index].name} 
                  width={80} 
                  height={80} 
                  className={styles.avatar}
                />
                <h4 className={styles.userName}>{reviews[index].name}</h4>
                <span className={styles.userRole}>{reviews[index].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.controls}>
            <button onClick={prev} className={styles.ctrlBtn}>
              <ChevronLeft />
            </button>
            <div className={styles.dots}>
               {reviews.map((_, i) => (
                 <div 
                   key={i} 
                   className={`${styles.dot} ${index === i ? styles.dotActive : ""}`}
                   onClick={() => setIndex(i)}
                 />
               ))}
            </div>
            <button onClick={next} className={styles.ctrlBtn}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
