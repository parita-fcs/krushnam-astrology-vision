"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { 
  Globe, 
  MessageCircle, 
  Phone, 
  Mail,
  MapPin,
  ArrowUp
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logoText}>KRUSHNAM<span> VISION</span></h2>
            <p className={styles.brandDesc}>
              Blending ancient Vedic wisdom with modern insight to guide you through life's cosmic journey.
            </p>
            <div className={styles.socials}>
               {[Globe, MessageCircle].map((Icon, i) => (
                 <motion.a 
                   key={i} 
                   href="#" 
                   className={styles.socialIcon}
                   whileHover={{ scale: 1.1, backgroundColor: "var(--accent)", color: "white" }}
                 >
                   <Icon size={18} />
                 </motion.a>
               ))}
            </div>
          </div>

          <div className={styles.links}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Our Services</Link></li>
              <li><Link href="#kundli">Free Kundli</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.contactInfo}>
            <h4 className={styles.heading}>Official Address</h4>
            <div className={styles.infoItem}>
              <MapPin size={18} className={styles.footerAccent} />
              <p>Gadhada (Swamina), Dist. Botad, Gujarat 364750</p>
            </div>
            <div className={styles.infoItem}>
              <Phone size={18} className={styles.footerAccent} />
              <p>(+91) 8160874164</p>
            </div>
            <div className={styles.infoItem}>
              <Mail size={18} className={styles.footerAccent} />
              <p>amitshastri@gmail.com</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Krushnam Astrology Vision. All rights reserved. Designed with Vedic Grace.</p>
        </div>
      </div>
    </footer>
  );
}
