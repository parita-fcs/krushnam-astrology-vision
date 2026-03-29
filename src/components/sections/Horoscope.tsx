"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Horoscope.module.css";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Understanding Mars Transit in 2024",
    excerpt: "The planet of energy and action is changing its position. How will it influence your zodiac sign?",
    date: "March 25, 2024",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "The Power of Vedic Remedies",
    excerpt: "Ancient procedures combined with modern discipline can bring significant positive shifts in life.",
    date: "March 20, 2024",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Importance of Vastu Shastra for Prosperity",
    excerpt: "Your environment directly affects your well-being. Learn simple tips to improve your home's energy.",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Horoscope() {
  const { t } = useLanguage();

  return (
    <section className={styles.horoscope} id="blog">
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.headerContent}>
             <h2 className={styles.title}>Cosmic Insights & Blog</h2>
             <p className={styles.subtitle}>Stay updated with planetary transits and spiritual wisdom</p>
          </div>
          <button className={styles.viewAll}>
             View All Posts <ArrowRight size={18} />
          </button>
        </motion.div>

        <div className={styles.grid}>
          {posts.map((post, idx) => (
            <motion.div 
              key={post.id}
              className={styles.postCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.postImage}>
                 <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={400} 
                    height={250} 
                    className={styles.img}
                    onError={(e) => {
                      (e.target as any).src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400";
                    }}
                 />
                 <div className={styles.dateBadge}>
                    <Calendar size={14} />
                    {post.date}
                 </div>
              </div>
              <div className={styles.postBody}>
                 <h3 className={styles.postTitle}>{post.title}</h3>
                 <p className={styles.postExcerpt}>{post.excerpt}</p>
                 <button className={styles.readMore}>
                    Read More <ArrowRight size={16} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
