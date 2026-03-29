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
            
            <motion.div 
              className={styles.gitaQuote}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              <div className={styles.quoteLine}></div>
              <p>"{t("about.quote")}"</p>
              <span>{t("about.quote_author")}</span>
            </motion.div>
            
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
                
                {/* Floating Peacock Feather in Portal */}
                <motion.div 
                  className={styles.portalIcon}
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 40 100" fill="var(--secondary)" opacity="0.4" width="60">
                    <path d="M20 95C20 95 20 80 20 60C20 40 5 25 5 15C5 5 15 2 20 2C25 2 35 5 35 15C35 25 20 40 20 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <ellipse cx="20" cy="15" rx="8" ry="12" fill="currentColor" fillOpacity="0.2" />
                    <ellipse cx="20" cy="15" rx="4" ry="6" fill="currentColor" fillOpacity="0.4" />
                  </svg>
                </motion.div>
                
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
                {/* Cute Footprints trail */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`foot-${i}`}
                    className={styles.footprintParticle}
                    style={{
                      left: `${10 + i * 20}%`,
                      bottom: `${20 + (i % 2 === 0 ? 0 : 5)}%`,
                    }}
                    animate={{ 
                      opacity: [0, 0.2, 0],
                      scale: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8
                    }}
                  >
                    <svg viewBox="0 0 40 40" fill="var(--secondary)" width="20">
                      <ellipse cx="20" cy="25" rx="8" ry="10" />
                      <circle cx="12" cy="10" r="3" />
                      <circle cx="18" cy="8" r="3" />
                      <circle cx="24" cy="9" r="3" />
                    </svg>
                  </motion.div>
                ))}
                
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
