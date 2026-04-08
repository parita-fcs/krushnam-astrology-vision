"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Services.module.css";
import Link from "next/link";
import { 
  Scroll, 
  Sparkle, 
  Flame, 
  Navigation, 
  HeartHandshake, 
  TrendingUp,
  Diamond,
  Layout,
  Calculator,
  Star,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <Scroll size={40} />,
    color: "#FF6B6B", // Reddish
    title: "Janam Kundli Analysis",
    desc: "Detailed birth chart analysis to understand your planetary positions and life path."
  },
  {
    icon: <Sparkle size={40} />,
    color: "#FFD93D", // Gold/Yellow
    title: "Vedic Pooja & Yagya",
    desc: "Ancient Vedic rituals performed for spiritual purification and divine blessings."
  },
  {
    icon: <Flame size={40} />,
    color: "#FF8E3C", // Orange
    title: "Karmakand Vidhi",
    desc: "Traditional ritualistic performances including Sanskaras and other sacred ceremonies."
  },
  {
    icon: <Navigation size={40} />,
    color: "#6BCB77", // Green
    title: "Vastu Consultation",
    desc: "Enhance positive energy in your property using authentic Vastu Shastra principles."
  },
  {
    icon: <HeartHandshake size={40} />,
    color: "#4D96FF", // Blue
    title: "Marriage Matching",
    desc: "Vedic Gun Milan and compatibility analysis for a prosperous married life."
  },
  {
    icon: <TrendingUp size={40} />,
    color: "#B100FF", // Purple
    title: "Business & Career Guidance",
    desc: "Astrological insights to overcome career hurdles and achieve business growth."
  },
  {
    icon: <Diamond size={40} />,
    color: "#00E0FF", // Cyan/Teal
    title: "Gemstone Advice",
    desc: "Scientific recommendation of gemstones to balance planetary influences."
  },
  {
    icon: <Layout size={40} />,
    color: "#FF66C4", // Pink
    title: "Tarot Reading",
    desc: "Intuitive card readings to gain clarity on specific life questions and future paths."
  },
  {
    icon: <Calculator size={40} />,
    color: "#6C7A89", // Steel/Gray
    title: "Numerology",
    desc: "Name correction and lucky number analysis based on Pythagorean and Chaldean systems."
  }
];

export default function Services({ isPage = false }: { isPage?: boolean }) {
  const { t } = useLanguage();

  const displayedServices = isPage ? services : services.slice(0, 6);

  return (
    <section className={styles.services} id="services">
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <div className={styles.topLabel}>
            <Star size={16} />
            <span>{t("services.section_label") || "Sacred Services"}</span>
          </div>
          <h2 className={styles.title}>
            {isPage ? t("services.title_page") : t("services.title_home")}
          </h2>
          <p className={styles.subtitle}>
            {t("services.subtitle")}
          </p>
        </div>
        
        <div className={styles.grid}>
          {displayedServices.map((service, index) => {
            const serviceKey = service.title.trim().toLowerCase().replace(/&/g, '').replace(/\s+/g, '_').replace(/-+/g, '_');
            const localizedTitle = t(`service_detail.${serviceKey}.title`);
            const localizedDesc = t(`service_detail.${serviceKey}.description`);

            return (
              <motion.div 
                key={index}
                className={styles.card}
                id={serviceKey.replace(/_/g, '-')}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className={styles.iconBox}
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className={styles.cardTitle}>{localizedTitle}</h3>
                <p className={styles.cardDesc}>{localizedDesc}</p>
                
                <Link 
                  href={`/services/${serviceKey.replace(/_/g, '-')}`} 
                  className={styles.cardLink}
                >
                  {t("common.learn_more") || "Learn More"} <ArrowRight size={16} />
                </Link>
                
                <div className={styles.cardGlow} />
              </motion.div>
            );
          })}
        </div>

        {!isPage && (
          <div className={styles.viewAllWrapper}>
            <Link href="/services" className={styles.viewAllBtn}>
              {t("services.view_all") || "View All Sacred Services"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
