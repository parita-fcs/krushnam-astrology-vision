"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./About.module.css";
import { Star, ShieldCheck, Award } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className={styles.about} id="about">
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageBox}>
            <Image 
              src="/assets/astrologer.png" 
              alt="Shastri Shree Amit B. Trivedi" 
              width={500}
              height={600}
              className={styles.astrologerImage}
              onError={(e) => {
                (e.target as any).src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
              }}
            />
          </div>
          
          <div className={styles.ornament}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 0l2 18h18l-15 11 6 11-11-8-11 8 6-11-15-11h18z"/>
            </svg>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>{t("about.title")}</h2>
          <p className={styles.subtitle}>{t("about.subtitle")}</p>
          <p className={styles.desc}>{t("about.desc")}</p>
          
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
               <div className={styles.highlightIcon}><Star size={24} /></div>
               <span className={styles.highlightText}>{t("about.experience")}</span>
            </div>
            <div className={styles.highlightItem}>
               <div className={styles.highlightIcon}><ShieldCheck size={24} /></div>
               <span className={styles.highlightText}>{t("about.clients")}</span>
            </div>
            <div className={styles.highlightItem}>
               <div className={styles.highlightIcon}><Award size={24} /></div>
               <span className={styles.highlightText}>{t("about.expertise")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
