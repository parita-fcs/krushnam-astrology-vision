"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./PoojaSection.module.css";
import { 
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { poojaItems } from "@/data/poojas";

interface PoojaSectionProps {
  limit?: number;
  showTitle?: boolean;
  theme?: "light" | "dark";
}

export default function PoojaSection({ limit, showTitle = true, theme = "dark" }: PoojaSectionProps) {
  const { t } = useLanguage();
  
  const displayedItems = limit ? poojaItems.slice(0, limit) : poojaItems;
  const isLight = theme === "light";

  return (
    <section className={`${styles.section} ${isLight ? styles.light : ""}`} id="poojas">
      <div className={`${styles.container} container`}>
        {showTitle && (
          <div className={styles.header}>
            <span className={styles.subtitle}>{t("poojas.subtitle")}</span>
            <h2 className={`${styles.title} ${isLight ? styles.lightText : ""}`}>{t("poojas.title")}</h2>
          </div>
        )}

        <div className={styles.grid}>
          {displayedItems.map((item, index) => (
            <motion.div 
              key={item.key}
              className={`${styles.card} ${isLight ? styles.lightCard : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper} style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                {item.icon}
              </div>
              <div className={styles.content}>
                <h3 className={`${styles.cardTitle} ${isLight ? styles.lightText : ""}`}>{t(`poojas.items.${item.key}.title`)}</h3>
                <p className={`${styles.cardDesc} ${isLight ? styles.lightDesc : ""}`}>{t(`poojas.items.${item.key}.desc`)}</p>
                <Link href="/contact" className={styles.cardLink}>
                  {t("common.learn_more")} <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className={styles.footer}>
            <Link href="/poojas">
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
        )}
      </div>
    </section>
  );
}
