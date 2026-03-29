"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./About.module.css";
import { Quote } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className={styles.about} id="about">
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.left}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageStack}>
              <div className={styles.imageMain}>
                <Image 
                  src="/assets/spiritual.jpg" 
                  alt="Vedic Wisdom" 
                  width={500}
                  height={600}
                  className={styles.mainImg}
                  onError={(e) => {
                    (e.target as any).src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
              <motion.div 
                className={styles.experienceBadge}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className={styles.badgeNum}>12+</span>
                <span className={styles.badgeText}>{t("about.experience")}</span>
              </motion.div>
              
              {/* Cute traditional decor */}
              <div className={styles.imageDecor}>
                <motion.div 
                  className={styles.decorIcon}
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <svg viewBox="0 0 40 40" fill="var(--secondary)" width="60">
                    <path d="M10 15C10 10 30 10 30 15C30 35 10 35 10 15Z" opacity="0.6" />
                    <path d="M20 15L18 22Q20 25 22 22L20 15Z" fill="white" />
                  </svg>
                </motion.div>
                <div className={styles.decorFlute}>
                  <svg viewBox="0 0 100 20" fill="var(--secondary)" width="80">
                    <rect x="5" y="8" width="80" height="2" rx="1" />
                    <circle cx="20" cy="9" r="0.5" fill="white" />
                    <circle cx="35" cy="9" r="0.5" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.right}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.topLabel}>{t("about.subtitle")}</span>
            <h2 className={styles.title}>{t("about.title")}</h2>
            
            <div className={styles.content}>
               <p className={styles.desc}>{t("about.desc1")}</p>
               <p className={styles.desc}>{t("about.desc2")}</p>
            </div>

            <div className={styles.quoteWrapper}>
              <Quote className={styles.quoteIcon} />
              <blockquote className={styles.quoteText}>
                {t("about.quote")}
              </blockquote>
              <span className={styles.quoteAuthor}>— Shrimad Bhagavad Gita</span>
            </div>

            <div className={styles.impact}>
              <div className={styles.impactItem}>
                <h4 className={styles.impactNum}>5000+</h4>
                <p className={styles.impactLabel}>{t("about.clients")}</p>
              </div>
              <div className={styles.impactDivider}></div>
              <div className={styles.impactItem}>
                <h4 className={styles.impactNum}>100%</h4>
                <p className={styles.impactLabel}>Dedication</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

