"use client";

import styles from "./WhyChoose.module.css";
import { Star, Shield, Clock, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChoose() {
  const { t } = useLanguage();

  const reasons = [
    { key: "accurate", icon: <Star size={32} /> },
    { key: "sacred", icon: <Heart size={32} /> },
    { key: "privacy", icon: <Shield size={32} /> },
    { key: "experience", icon: <Clock size={32} /> }
  ];

  return (
    <section className={styles.whyChoose}>
      <div className="container">
        <div className={styles.grid}>
          {reasons.map((reason, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.icon}>{reason.icon}</div>
              <h3 className={styles.title}>{t(`why_choose.${reason.key}`)}</h3>
              <p className={styles.desc}>Trustworthy and proven results for thousands of seekers.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
