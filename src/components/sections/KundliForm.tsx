"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./KundliForm.module.css";
import { Calendar, Clock, MapPin, User, ArrowRight, Sparkles } from "lucide-react";

const zodiacs = [
  "Aries", "Taurus", "Gemini", "Cancer", 
  "Leo", "Virgo", "Libra", "Scorpio", 
  "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export default function KundliForm() {
  const { t } = useLanguage();
  const [selectedZodiac, setSelectedZodiac] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculated(true);
  };

  return (
    <section className={styles.kundliSection} id="kundli">
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.formColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.header}>
              <span className={styles.topLabel}>Free tool</span>
              <h2 className={styles.title}>{t("interactive.title")}</h2>
              <p className={styles.subtitle}>{t("interactive.subtitle")}</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.label}><User size={16} /> {t("interactive.name")}</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}><Calendar size={16} /> {t("interactive.dob")}</label>
                  <input type="date" required />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}><Clock size={16} /> {t("interactive.tob")}</label>
                  <input type="time" required />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}><MapPin size={16} /> {t("interactive.pob")}</label>
                <input type="text" placeholder="City, Country" required />
              </div>

              <div className={styles.zodiacSelector}>
                <label className={styles.label}>{t("interactive.zodiac")}</label>
                <div className={styles.zodiacGrid}>
                  {zodiacs.map((zodiac) => (
                    <button
                      key={zodiac}
                      type="button"
                      className={`${styles.zodiacBtn} ${selectedZodiac === zodiac ? styles.activeZodiac : ""}`}
                      onClick={() => setSelectedZodiac(zodiac)}
                    >
                      {zodiac}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "1.5rem" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("interactive.calculate")}
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            className={styles.visualColumn}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.kundliCard}>
              <AnimatePresence mode="wait">
                {!isCalculated ? (
                  <motion.div 
                    key="waiting"
                    className={styles.waitingState}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className={styles.chartPlaceholder}>
                      <motion.div 
                        className={styles.spinningWheel}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                         {[...Array(12)].map((_, i) => (
                           <div 
                             key={i} 
                             className={styles.segment}
                             style={{ transform: `rotate(${i * 30}deg)` }}
                           ></div>
                         ))}
                      </motion.div>
                      <Sparkles size={48} className={styles.pulseIcon} />
                    </div>
                    <h3>Waiting for Details...</h3>
                    <p>Enter your birth information to generate your personalized Vedic chart.</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="calculated"
                    className={styles.calculatedState}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className={styles.kundliHeader}>
                       <span className={styles.chartTitle}>LAGNA CHART</span>
                       <span className={styles.chartSubtitle}>D1 Division</span>
                    </div>
                    <div className={styles.kundliChart}>
                       {/* SVG Kundli Style */}
                       <svg viewBox="0 0 200 200" className={styles.svgChart}>
                          <rect x="10" y="10" width="180" height="180" stroke="var(--primary)" fill="none" strokeWidth="2" />
                          <line x1="10" y1="10" x2="190" y2="190" stroke="var(--primary)" strokeWidth="1" />
                          <line x1="10" y1="190" x2="190" y2="10" stroke="var(--primary)" strokeWidth="1" />
                          <line x1="100" y1="10" x2="100" y2="190" stroke="var(--primary)" strokeDasharray="4" strokeOpacity="0.3" />
                          <line x1="10" y1="100" x2="190" y2="100" stroke="var(--primary)" strokeDasharray="4" strokeOpacity="0.3" />
                          {/* Inner diamonds */}
                          <path d="M100 10 L190 100 L100 190 L10 100 Z" stroke="var(--primary)" fill="rgba(0,168,89,0.05)" strokeWidth="1.5" />
                       </svg>
                    </div>
                    <div className={styles.chartDetails}>
                        <div className={styles.detailItem}>
                           <span>Ascendant</span>
                           <strong>{selectedZodiac || "Thinking..."}</strong>
                        </div>
                        <div className={styles.detailItem}>
                           <span>Moon Sign</span>
                           <strong>Virgo</strong>
                        </div>
                    </div>
                    <button className={styles.downloadBtn} onClick={() => setIsCalculated(false)}>
                       Reset Calculator
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
