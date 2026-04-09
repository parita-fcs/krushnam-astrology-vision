"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Hero.module.css";
import { Sparkles, Sun, Moon, Feather } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { damping: 25, stiffness: 120 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 250]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section className={styles.hero} ref={containerRef} id="home">
      {/* Deep Background Layer */}
      <div className={styles.plainBg} />
      
      {/* Decorative Atmosphere Icons */}
      <div className={styles.floatingElements}>
        <div className={`${styles.floatIcon} ${styles.icon1}`}>
          <Sun size={24} strokeWidth={1} />
        </div>
        <div className={`${styles.floatIcon} ${styles.icon2}`}>
          <Moon size={20} strokeWidth={1} />
        </div>
        <div className={`${styles.floatIcon} ${styles.icon3}`}>
          <Feather size={28} strokeWidth={1.5} color="#C5A059" /> 
        </div>
      </div>

      <div className={`${styles.gridContainer} container`}>
        {/* Left Side: Divine Iconic Presence */}
        <motion.div 
          className={styles.visualColumn}
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className={styles.krishnaWrapper}>
             <Image 
                src="/assets/krishna_silhouette.png" 
                alt="Lord Krishna Silhouette" 
                width={500} 
                height={500} 
                className={styles.krishnaImg}
                priority
             />
             <div className={styles.divineGlow} />
          </div>
        </motion.div>

        {/* Right Side: Sacred Wisdom Content */}
        <motion.div 
          style={{ y: y1, opacity }}
          className={styles.textColumn}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >          
          <div className={styles.slokContent}>
            <div className={styles.verticalLine} />
            <div className={styles.slokWrap}>
              <h1 className={styles.slokTitleColumn}>
                {t("cta.gita_shlok_1")} <br />
                <span className={styles.goldenHighlight}>
                  {t("cta.gita_shlok_2")}
                </span>
              </h1>

              <p className={styles.slokMeaningColumn}>
                 "{t("cta.gita_quote")}" <br />
                 <span className={styles.reference}>{t("cta.gita_reference")}</span>
              </p>

              <div className={styles.ctaWrapper}>
                <Link href="/services" className={styles.premiumBtnSmall}>
                  <span>{t("common.explore_services")}</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
