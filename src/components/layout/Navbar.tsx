"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Navbar.module.css";
import { MessageSquare, Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.navContainer} container`}>
        <div className={styles.logoBox}>
          <Link href="#home">
            <h2 className={styles.logoText}>KRUSHNAM<span> VISION</span></h2>
          </Link>
        </div>

        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <li><Link href="#home" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>{t("nav.home")}</Link></li>
          <li><Link href="#about" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>{t("nav.about")}</Link></li>
          <li><Link href="#services" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>{t("nav.services")}</Link></li>
          <li><Link href="#kundli" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>{t("nav.kundli")}</Link></li>
          <li><Link href="#contact" className={styles.menuItem} onClick={() => setIsMenuOpen(false)}>{t("nav.contact")}</Link></li>
        </ul>

        <div className={styles.actions}>
          <div className={styles.langToggle}>
            {["en", "hi"].map((lang) => (
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
            <Link href="#kundli">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 className={styles.bookBtn}
               >
                 <Sparkles size={16} />
                 <span>Get Kundli</span>
               </motion.button>
            </Link>
            
            <button className={styles.mobileToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}


