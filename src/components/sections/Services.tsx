"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Services.module.css";
import { 
  FileText, 
  Flame, 
  Compass, 
  Heart, 
  Briefcase,
  Gem
} from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const servicesList = [
    { 
      key: "kundli", 
      icon: <FileText size={32} />,
      color: "#00A859"
    },
    { 
      key: "marriage", 
      icon: <Heart size={32} />,
      color: "#F58634"
    },
    { 
      key: "career", 
      icon: <Briefcase size={32} />,
      color: "#FFCC29"
    },
    { 
      key: "vastu", 
      icon: <Compass size={32} />,
      color: "#00A859"
    },
    { 
      key: "remedies", 
      icon: <Flame size={32} />,
      color: "#F58634"
    },
    { 
      key: "gemstones", 
      icon: <Gem size={32} />,
      color: "#FFCC29"
    }
  ];

  return (
    <section className={styles.services} id="services">
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.topLabel}>Our Expertise</span>
          <h2 className={styles.title}>{t("services.title")}</h2>
          <p className={styles.subtitle}>{t("services.subtitle")}</p>
        </motion.div>
        
        <div className={styles.grid}>
          {servicesList.map((service, index) => (
            <motion.div 
              key={service.key}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div 
                className={styles.iconBox} 
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{t(`services.items.${service.key}`)}</h3>
              <p className={styles.cardDesc}>
                Explore your cosmic potential with our expert analysis and traditional wisdom.
              </p>
              <motion.div 
                className={styles.cardGlow}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

