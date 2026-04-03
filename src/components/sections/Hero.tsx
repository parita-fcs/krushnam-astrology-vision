"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Hero.module.css";
import { Sparkles, ArrowRight, Sun, Moon, Cloud, Star } from "lucide-react";

const ZODIAC_SYMBOLS = [
  "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"
];

export default function Hero() {
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return (
    <section className={styles.hero} id="home">
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imageWrapper}>
              <div className={styles.astrologerImage} />
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>{t("hero.title")}</h1>
            <p className={styles.subtitle}>{t("hero.subtitle")}</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section className={styles.hero} id="home">
      <div className={styles.backgroundDecor}>
        <div className={styles.mandalaPattern} />
        <div className={styles.glow} style={{ top: '20%', left: '10%' }} />
        <div className={styles.glow} style={{ bottom: '10%', right: '5%' }} />
        
        {/* Floating Zodiac Symbols */}
        {ZODIAC_SYMBOLS.map((symbol, i) => (
          <motion.div
            key={i}
            className={styles.floatingIcon}
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              fontSize: '1.5rem',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Small Glowing Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            className={styles.particle}
            initial={{ 
              x: Math.random() * 2000 - 1000, 
              y: Math.random() * 2000 - 1000,
              opacity: 0 
            }}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          {/* Left Side: Astrologer Image (Identity) */}
          <motion.div 
            className={styles.left}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageAura} />
              <motion.div
                animate={{ 
                  y: [0, -10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image 
                  src="/assets/astrologer.png"
                  alt="Professional Astrologer"
                  width={600}
                  height={800}
                  className={styles.astrologerImage}
                  priority
                />
              </motion.div>
              
              {/* Floating elements around the image */}
              <motion.div 
                className={styles.floatingIcon}
                style={{ top: '10%', right: '0%' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sun size={40} className="text-accent" />
              </motion.div>
              <motion.div 
                className={styles.floatingIcon}
                style={{ bottom: '20%', left: '-5%' }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Moon size={32} className="text-primary" />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Side: Text & Content */}
          <motion.div 
            className={styles.right}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className={styles.badge}>
              <Sparkles size={16} />
              <span>Ancient Vedic Wisdom & Modern Clarity</span>
            </div>
            
            <h1 className={styles.title}>
              Unlock Your <span>Destiny</span> <br /> Through Astrology
            </h1>
            
            <p className={styles.subtitle}>
              Receive personalized guidance and gain deep insights into your life's path based on 
              traditional Vedic principles combined with modern intuitive wisdom.
            </p>
            
            <div className={styles.btns}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary"
              >
                {t("hero.get_kundli") || "Book Consultation"}
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary"
              >
                {t("hero.book") || "View Services"}
              </motion.button>
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>12+</span>
                <span className={styles.statLabel}>Years Exp.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>5k+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>99%</span>
                <span className={styles.statLabel}>Accuracy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
