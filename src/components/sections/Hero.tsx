"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Hero.module.css";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return (
    <section className={styles.hero} id="home">
      <div className={styles.cosmicBackground}>
        <div className={styles.starField}></div>
        <div className={styles.glowOverlay}></div>
      </div>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.title}>{t("hero.title")}</h1>
            <p className={styles.subtitle}>{t("hero.subtitle")}</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section className={styles.hero} id="home">
      <div className={styles.cosmicBackground}>
        <div className={styles.starField}></div>
        <motion.div 
          className={styles.zodiacRing}
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
        <div className={styles.glowOverlay}></div>
      </div>
      
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <motion.div 
            className={styles.left}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className={styles.badge}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Sparkles size={16} className={styles.accentIcon} />
              <span>Vedic Astrology & Modern Insight</span>
            </motion.div>
            
            <h1 className={styles.title}>
              {t("hero.title")}
            </h1>
            <p className={styles.subtitle}>
              {t("hero.subtitle")}
            </p>
            
            <div className={styles.btns}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 168, 89, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                {t("hero.get_kundli")}
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary"
              >
                {t("hero.book")}
              </motion.button>
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>12+</span>
                <span className={styles.statLabel}>Years</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>5k+</span>
                <span className={styles.statLabel}>Clients</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>99%</span>
                <span className={styles.statLabel}>Accuracy</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.right}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className={styles.visualContainer}>
              <div className={styles.cosmicPortal}>
                <div className={styles.outerCircle}></div>
                <div className={styles.innerCircle}></div>
                {/* Removed centerSun and Image */}

                {/* Floating Zodiac Symbols */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.zodiacPoint}
                    style={{
                      top: `${50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                      left: `${50 + 40 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                    }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
              <div className={styles.floatingParticles}>
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.particle}
                    initial={{ 
                      x: Math.random() * 400 - 200, 
                      y: Math.random() * 400 - 200,
                      opacity: 0 
                    }}
                    animate={{ 
                      y: [0, -40, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
