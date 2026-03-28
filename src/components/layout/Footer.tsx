"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Footer.module.css";
import { MessageCircle, MessageSquare, Globe, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logoBox}>
              <Image 
                src="/assets/logo.png" 
                alt="Krushnam Astrology Vision" 
                width={120} 
                height={120} 
                className={styles.logoImage}
              />
            </div>
            <p className={styles.desc}>
              Guiding souls through the celestial light of Vedic Wisdom. Trusted by thousands for accurate predictions and sacred rituals.
            </p>
            <div className={styles.social}>
               <MessageCircle size={24} style={{ marginRight: 20 }} />
               <MessageSquare size={24} style={{ marginRight: 20 }} />
               <Globe size={24} />
            </div>
          </div>
          
          <div className={styles.links}>
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="#home">Home</Link></li>
              <li className={styles.linkItem}><Link href="#services">Services</Link></li>
              <li className={styles.linkItem}><Link href="#about">About Us</Link></li>
              <li className={styles.linkItem}><Link href="#pooja">Pooja Services</Link></li>
              <li className={styles.linkItem}><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.contact}>
            <h3 className={styles.title}>Contact Details</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Phone size={16} /> (+91) 81608 74164</li>
              <li className={styles.linkItem}><Mail size={16} /> info@krushnamastrology.com</li>
              <li className={styles.linkItem}><MapPin size={16} /> {t("contact.address_val")}</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© 2026 Krushnam Astrology Vision. All rights reserved. Designed with Vedic Grace.</p>
        </div>
      </div>
    </footer>
  );
}
