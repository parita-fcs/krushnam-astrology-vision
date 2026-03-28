"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Navbar.module.css";
import { Phone, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <motion.div 
        className={`${styles.navContainer} container`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.logoBox}>
          <Link href="#home">
            <Image
              src="/assets/logo.png"
              alt="Krushnam Astrology Vision"
              width={160}
              height={55}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        <ul className={styles.menu}>
          <li><Link href="#home" className={styles.menuItem}>{t("nav.home")}</Link></li>
          <li><Link href="#services" className={styles.menuItem}>{t("nav.services")}</Link></li>
          <li><Link href="#about" className={styles.menuItem}>{t("nav.about")}</Link></li>
          <li><Link href="#contact" className={styles.menuItem}>{t("nav.contact")}</Link></li>
        </ul>

        <div className={styles.actions}>
          <div className={styles.langToggle}>
            {["en", "hi", "gu"].map((lang) => (
              <button
                key={lang}
                className={`${styles.langBtn} ${language === lang ? styles.langBtnActive : ""}`}
                onClick={() => setLanguage(lang as any)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          
          <div className={styles.ctaGroup}>
            <Link href="https://wa.me/918160874164" target="_blank" className={styles.whatsappIcon}>
               <MessageSquare size={20} />
            </Link>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.bookBtn}
            >
              <Sparkles size={16} className="text-gold" />
              <span>{t("hero.book")}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}

