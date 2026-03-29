"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./PoojaSection.module.css";
import { 
  Flame,
  Wind,
  Music,
  Gem
} from "lucide-react";

export default function PoojaSection() {
  const { t } = useLanguage();

  const remedies = [
    { 
      key: "pooja", 
      icon: <Flame size={32} />, 
      title: "Vedic Pooja",
      desc: "Traditional rituals performed with precise Vedic mantras for divine harmony."
    },
    { 
      key: "havan", 
      icon: <Wind size={32} />, 
      title: "Sacred Havan",
      desc: "Purifying fire ceremonies to clear negative energy and bring prosperity."
    },
    { 
      key: "mantra", 
      icon: <Music size={32} />, 
      title: "Mantra Jaap",
      desc: "Powerful sound vibrations tailored to balance your specific planetary shifts."
    },
    { 
      key: "gemstones", 
      icon: <Gem size={32} />, 
      title: "Gemstones",
      desc: "Blessed stones prescribed according to your birth chart for long-term benefit."
    }
  ];

  return (
    <section className={styles.pooja} id="pooja">
      <div className={styles.glowOverlay}></div>
      
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.topLabel}>Sacred Remedies</span>
          <h2 className={styles.title}>Spiritual Solutions</h2>
          <p className={styles.subtitle}>Bringing peace and balance through traditional Vedic wisdom</p>
        </motion.div>
        
        <div className={styles.grid}>
          {remedies.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.smokeEffect}></div>
              <div className={styles.cardContent}>
                <div className={styles.iconBox}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <button className={styles.bookBtn}>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

