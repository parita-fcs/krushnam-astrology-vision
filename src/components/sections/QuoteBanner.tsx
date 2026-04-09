"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./QuoteBanner.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuoteBanner() {
  const { t } = useLanguage();

  return (
    <section className={styles.banner}>
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <blockquote className={styles.quote}>
            <span className={styles.quoteMark}>"</span>
            {t("cta.gita_shlok_1")} <br />
            <span className={styles.goldenHighlight}>
              {t("cta.gita_shlok_2")}
            </span>
            <span className={styles.quoteMark}>"</span>
          </blockquote>
          <cite className={styles.author}>{t("cta.gita_reference")}</cite>
          
          <div className={styles.actions}>
            <Link href="/services">
              <motion.button 
                className={styles.ctaBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("common.explore_services")} <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className={styles.overlay} />
    </section>
  );
}
