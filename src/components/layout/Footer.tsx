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
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logoText}>KRUSHNAM<span> ASTROLOGY</span></h2>
            <p className={styles.brandDesc}>
              Blending ancient Vedic wisdom with modern insight to guide you through life's cosmic journey. Discover your true path with Shastri ji.
            </p>
            <div className={styles.socials}>
               {[Globe, MessageCircle].map((Icon, i) => (
                 <motion.a 
                   key={i} 
                   href="#" 
                   className={styles.socialIcon}
                   whileHover={{ scale: 1.1 }}
                 >
                   <Icon size={18} />
                 </motion.a>
               ))}
            </div>
          </div>

          <div className={styles.links}>
            <h4 className={styles.heading}>Services</h4>
            <ul>
              <li><Link href="#services">Kundli Analysis</Link></li>
              <li><Link href="#services">Horoscope Reading</Link></li>
              <li><Link href="#services">Love Compatibility</Link></li>
              <li><Link href="#services">Vastu Consultation</Link></li>
              <li><Link href="#pooja">Vedic Pooja</Link></li>
            </ul>
          </div>

          <div className={styles.contactInfo}>
            <h4 className={styles.heading}>Contact Us</h4>
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
          <p>© {currentYear} Krushnam Astrology Vision. All rights reserved.</p>
          <div className={styles.blessing}>
            <Heart size={16} fill="var(--secondary)" />
            <p>May the stars guide your future</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
