"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./PoojaSection.module.css";
import { 
  ShieldCheck, 
  Sparkle, 
  Orbit, 
  Activity, 
  Bird, 
  Zap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const poojaItems = [
  { key: "mahamrityunjay", icon: <ShieldCheck size={32} />, color: "#C5A059" },
  { key: "navgraha", icon: <Orbit size={32} />, color: "#B100FF" },
  { key: "rudra", icon: <Sparkle size={32} />, color: "#4D96FF" },
  { key: "kaal_sarp", icon: <Activity size={32} />, color: "#FF6B6B" },
  { key: "shanti_path", icon: <Bird size={32} />, color: "#6BCB77" },
  { key: "sunderkand", icon: <Zap size={32} />, color: "#FFD93D" }
];

export default function PoojaSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="poojas">
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <span className={styles.subtitle}>{t("poojas.subtitle")}</span>
          <h2 className={styles.title}>{t("poojas.title")}</h2>
        </div>

        <div className={styles.grid}>
          {poojaItems.map((item, index) => (
            <motion.div 
              key={item.key}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper} style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                {item.icon}
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{t(`poojas.items.${item.key}.title`)}</h3>
                <p className={styles.cardDesc}>{t(`poojas.items.${item.key}.desc`)}</p>
                <Link href="/contact" className={styles.cardLink}>
                  {t("common.learn_more")} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/services">
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginTop: "4rem" }}
            >
              {t("poojas.view_all")} <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
