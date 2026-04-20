"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Navbar.module.css";
import { MessageSquare, Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.navContainer} container`}>
        <div className={styles.logoBox}>
          <Link href="/">
            <Image 
              src="/assets/logo.png" 
              alt="Krushnam Astrology Vision" 
              width={180} 
              height={180} 
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <div className={styles.mobileActions}>
            <div className={styles.langToggleMobile}>
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
            
            <Link href="#contact" className={styles.bookBtnMobile} onClick={() => setIsMenuOpen(false)}>
               <Sparkles size={16} />
               <span>{t("nav.book_now")}</span>
            </Link>
          </div>

          <li>
            <Link 
              href="/" 
              className={`${styles.menuItem} ${isActive("/") ? styles.active : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`${styles.menuItem} ${isActive("/about") ? styles.active : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={`${styles.menuItem} ${isActive("/services") ? styles.active : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.services")}
            </Link>
          </li>
          <li>
            <Link 
              href="/gallery" 
              className={`${styles.menuItem} ${isActive("/gallery") ? styles.active : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.gallery")}
            </Link>
          </li>
          <li>
            <Link 
              href="/poojas" 
              className={`${styles.menuItem} ${isActive("/poojas") ? styles.active : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.poojas")}
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`${styles.menuItem} ${isActive("/contact") ? styles.active : ""}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </li>
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
            <Link href="#contact" className={styles.desktopOnly}>
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 className={styles.bookBtn}
               >
                 <Sparkles size={16} />
                 <span>{t("nav.book_now")}</span>
               </motion.button>
            </Link>
            
            <button className={styles.mobileToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}


