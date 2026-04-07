"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import styles from "./AboutPage.module.css";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.pageTitle}
          >
            {t("about.page_title") || "About Our Spiritual Journey"}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className={styles.breadcrumb}
          >
            Home / About
          </motion.div>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Our Sacred Journey / Timeline */}
      <section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subtitle}>{t("about.legacy_subtitle")}</span>
            <h2 className={styles.sectionTitle}>{t("about.legacy_title")}</h2>
          </div>
          
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timeYear}>{t("about.timeline.item1_year")}</div>
              <div className={styles.timeContent}>
                <h3>{t("about.timeline.item1_title")}</h3>
                <p>{t("about.timeline.item1_desc")}</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeYear}>{t("about.timeline.item2_year")}</div>
              <div className={styles.timeContent}>
                <h3>{t("about.timeline.item2_title")}</h3>
                <p>{t("about.timeline.item2_desc")}</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeYear}>{t("about.timeline.item3_year")}</div>
              <div className={styles.timeContent}>
                <h3>{t("about.timeline.item3_title")}</h3>
                <p>{t("about.timeline.item3_desc")}</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeYear}>{t("about.timeline.item4_year")}</div>
              <div className={styles.timeContent}>
                <h3>{t("about.timeline.item4_title")}</h3>
                <p>{t("about.timeline.item4_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subtitle}>{t("about.values_subtitle")}</span>
            <h2 className={styles.sectionTitle}>{t("about.values_title")}</h2>
          </div>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🕉️</div>
              <h3>{t("about.values.v1_title")}</h3>
              <p>{t("about.values.v1_desc")}</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>📜</div>
              <h3>{t("about.values.v2_title")}</h3>
              <p>{t("about.values.v2_desc")}</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>{t("about.values.v3_title")}</h3>
              <p>{t("about.values.v3_desc")}</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>✨</div>
              <h3>{t("about.values.v4_title")}</h3>
              <p>{t("about.values.v4_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className={styles.philosophySection}>
        <div className="container">
          <div className={styles.philosophyContent}>
            <h2 className={styles.sectionTitle}>{t("about.philosophy_title")}</h2>
            <p>
              {t("about.philosophy_desc")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
