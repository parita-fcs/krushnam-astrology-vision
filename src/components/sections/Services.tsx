"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Services.module.css";
import { 
  FileText, 
  Flame, 
  BookOpen, 
  Home, 
  Heart, 
  Briefcase 
} from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  const servicesList = [
    { 
      key: "janam_kundli", 
      icon: <FileText size={40} />,
      id: "kundli" 
    },
    { 
      key: "vedic_pooja", 
      icon: <Flame size={40} />,
      id: "pooja" 
    },
    { 
      key: "karmakand", 
      icon: <BookOpen size={40} />,
      id: "karmakand" 
    },
    { 
      key: "vastu", 
      icon: <Home size={40} />,
      id: "vastu" 
    },
    { 
      key: "marriage", 
      icon: <Heart size={40} />,
      id: "marriage" 
    },
    { 
      key: "career", 
      icon: <Briefcase size={40} />,
      id: "career" 
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
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>{t("services.title")}</h2>
          <p className={styles.subtitle}>{t("services.subtitle")}</p>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className={styles.grid}>
          {servicesList.map((service, index) => (
            <motion.div 
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{t(`services.items.${service.key}`)}</h3>
              <p className={styles.cardDesc}>
                Personalized professional guidance based on ancient Vedic principles and stars orientation.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
