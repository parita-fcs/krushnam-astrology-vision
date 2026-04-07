"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./About.module.css";
import { ShieldCheck, Target, UserCheck, Sparkles, ArrowRight } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const badges = [
    { icon: <ShieldCheck size={20} />, text: t("about.badge1") },
    { icon: <Target size={20} />, text: t("about.badge2") },
    { icon: <UserCheck size={20} />, text: t("about.badge3") }
  ];

  return (
    <section className={styles.about} id="about">
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {/* Left Side: Astrologer Image */}
          <motion.div 
            className={styles.left}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src="/assets/astrologer.png"
                alt="Professional Astrologer"
                width={500}
                height={600}
                className={styles.aboutImage}
              />
              <motion.div 
                className={styles.experienceBadge}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <span className={styles.badgeNum}>{t("about.exp_years")}</span>
                <span className={styles.badgeText}>{t("about.exp_label")}</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Side: Content */}
          <motion.div 
            className={styles.right}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={styles.topLabel}>
              <Sparkles size={14} style={{ marginRight: '8px' }} />
              {t("about.meet_guide")}
            </span>
            <h2 className={styles.title}>{t("about.astrologer_name")}</h2>
            
            <p className={styles.desc}>
              {t("about.bio")}
            </p>

            {/* Badges as requested */}
            <div className={styles.badges}>
              {badges.map((badge, idx) => (
                <div key={idx} className={styles.badge}>
                  <div className={styles.badgeIcon}>{badge.icon}</div>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>5000+</span>
                <span className={styles.statLabel}>{t("about.stat1_label")}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>{t("about.stat2_label")}</span>
              </div>
            </div>

            <div className={styles.moreBtnWrapper}>
              <a href="/about" className={styles.moreBtn}>
                {t("about.more_btn")} <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
