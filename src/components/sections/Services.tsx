"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Services.module.css";
import { 
  FileText, 
  Calendar, 
  Heart, 
  Briefcase, 
  Compass, 
  Sparkles 
} from "lucide-react";

const services = [
  {
    icon: <FileText size={32} />,
    color: "#00A859",
    title: "Kundli Analysis",
    desc: "Detailed birth chart analysis to understand your planetary positions and their influence on your life events."
  },
  {
    icon: <Calendar size={32} />,
    color: "#F58634",
    title: "Horoscope Reading",
    desc: "Daily, monthly, and yearly predictions to help you navigate through various phases of life with clarity."
  },
  {
    icon: <Heart size={32} />,
    color: "#FFCC29",
    title: "Love Compatibility",
    desc: "Understand the harmony between partners using advanced Vedic matching techniques for a soulful journey."
  },
  {
    icon: <Briefcase size={32} />,
    color: "#00A859",
    title: "Career Guidance",
    desc: "Find the right profession and success periods based on your tenth house and planetary transits."
  },
  {
    icon: <Compass size={32} />,
    color: "#F58634",
    title: "Vastu Consultation",
    desc: "Create positive energy in your home or workspace with ancient wisdom for prosperity and health."
  }
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className={styles.services} id="services">
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <div className={styles.topLabel}>
            <Sparkles size={16} />
            <span>Sacred Services</span>
          </div>
          <h2 className={styles.title}>Spiritual Solutions <br /> For Your Life Journey</h2>
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
      </div>
    </section>
  );
}
