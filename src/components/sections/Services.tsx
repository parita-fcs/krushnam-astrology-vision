"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Services.module.css";
import { 
  Scroll, 
  Sparkle, 
  Flame, 
  Navigation, 
  HeartHandshake, 
  TrendingUp,
  Star
} from "lucide-react";

const services = [
  {
    icon: <Scroll size={32} />,
    color: "#C5A059",
    title: "Janam Kundli Analysis",
    desc: "Detailed birth chart analysis to understand your planetary positions and life path."
  },
  {
    icon: <Sparkle size={32} />,
    color: "#C5A059",
    title: "Vedic Pooja & Yagya",
    desc: "Ancient Vedic rituals performed for spiritual purification and divine blessings."
  },
  {
    icon: <Flame size={32} />,
    color: "#C5A059",
    title: "Karmakand Vidhi",
    desc: "Traditional ritualistic performances including Sanskaras and other sacred ceremonies."
  },
  {
    icon: <Navigation size={32} />,
    color: "#C5A059",
    title: "Vastu Consultation",
    desc: "Enhance positive energy in your property using authentic Vastu Shastra principles."
  },
  {
    icon: <HeartHandshake size={32} />,
    color: "#C5A059",
    title: "Marriage Matching",
    desc: "Vedic Gun Milan and compatibility analysis for a prosperous married life."
  },
  {
    icon: <TrendingUp size={32} />,
    color: "#C5A059",
    title: "Business & Career Guidance",
    desc: "Astrological insights to overcome career hurdles and achieve business growth."
  }
];

export default function Services({ isPage = false }: { isPage?: boolean }) {
  const { t } = useLanguage();

  return (
    <section className={styles.services} id="services">
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <div className={styles.topLabel}>
            <Star size={16} />
            <span>Sacred Services</span>
          </div>
          <h2 className={styles.title}>
            {isPage ? "Explore All Our Spiritual Services" : "Spiritual Solutions For Your Life Journey"}
          </h2>
          <p className={styles.subtitle}>
            Explore our range of personalized astrology services rooted in ancient 
            Vedic traditions and modern insights.
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className={styles.iconBox}
                style={{ backgroundColor: `${service.color}10`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </div>

        {!isPage && (
          <div className={styles.viewAllWrapper}>
            <a href="/services" className={styles.viewAllBtn}>
              View All Sacred Services
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
