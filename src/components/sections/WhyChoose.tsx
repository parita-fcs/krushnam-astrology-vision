"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./WhyChoose.module.css";
import { UserCheck, Zap, ShieldCheck, HeartPulse } from "lucide-react";

export default function WhyChoose() {
  const { t } = useLanguage();

  const features = [
    { 
      key: "item1", 
      icon: <UserCheck size={28} />, 
      color: "#00A859" 
    },
    { 
      key: "item2", 
      icon: <Zap size={28} />, 
      color: "#F58634" 
    },
    { 
      key: "item3", 
      icon: <HeartPulse size={28} />, 
      color: "#FFCC29" 
    },
    { 
      key: "item4", 
      icon: <ShieldCheck size={28} />, 
      color: "#00A859" 
    }
  ];

  return (
    <section className={styles.whyChoose}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>{t("why_choose.title")}</h2>
        </motion.div>
        
        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div 
                className={styles.iconWrapper}
                style={{ backgroundColor: `${feature.color}10`, color: feature.color }}
              >
                {feature.icon}
              </div>
              <div className={styles.info}>
                <h3 className={styles.cardTitle}>{t(`why_choose.${feature.key}_title`)}</h3>
                <p className={styles.cardDesc}>{t(`why_choose.${feature.key}_desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

