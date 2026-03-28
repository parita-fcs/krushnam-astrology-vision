"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./PoojaSection.module.css";
import { 
  Sun, 
  Moon, 
  Wind,
  Flame,
  Droplets
} from "lucide-react";

export default function PoojaSection() {
  const { t } = useLanguage();

  const poojas = [
    { key: "mrityunjaya", icon: <Flame size={32} /> },
    { key: "ganesh", icon: <Sun size={32} /> },
    { key: "navgrah", icon: <Moon size={32} /> },
    { key: "vastu", icon: <Wind size={32} /> }
  ];

  return (
    <section className={styles.pooja} id="pooja">
      <div className={styles.bgOrnament}>
         <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
           <circle cx="50" cy="50" r="40" stroke="var(--gold-accent)" strokeOpacity="0.1" />
           <path d="M50 10L60 40H90L65 60L75 90L50 70L25 90L35 60L10 40H40L50 10Z" stroke="var(--gold-accent)" strokeOpacity="0.1" />
         </svg>
      </div>
      
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>{t("pooja.title")}</h2>
          <p className={styles.subtitle}>{t("pooja.subtitle")}</p>
        </motion.div>
        
        <div className={styles.grid}>
          {poojas.map((pooja, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.iconBox}>{pooja.icon}</div>
              <h3 className={styles.cardTitle}>{t(`pooja.items.${pooja.key}`)}</h3>
              <p className={styles.cardDesc}>{t(`pooja.items.${pooja.key}_desc`)}</p>
              <button className="btn btn-outline" style={{ display: "block", margin: "0 auto" }}>
                 {t("pooja.items.book")}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
