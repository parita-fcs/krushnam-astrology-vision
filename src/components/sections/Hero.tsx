"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Hero.module.css";
import { Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgPattern}>
         <div className="zodiac-pattern"></div>
      </div>
      
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>{t("hero.title")}</h1>
          <p className={styles.subtitle}>{t("hero.subtitle1")}</p>
          
          <div className={styles.btns}>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="btn btn-primary"
             >
               {t("hero.book")}
             </motion.button>
             
             <Link href="https://wa.me/918160874164" target="_blank">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="btn btn-outline"
               >
                 <MessageCircle size={20} />
                 {t("hero.whatsapp")}
               </motion.button>
             </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.right}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.cardWrapper}>
             {/* Floating elements */}
             <motion.div 
               className={styles.floatingIcon} 
               style={{ top: -40, right: -40 }}
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
               <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                 <circle cx="50" cy="50" r="45" stroke="var(--gold-accent)" strokeOpacity="0.3" strokeDasharray="5 5" />
               </svg>
             </motion.div>
             
             <motion.div 
               className={styles.imageCard}
               whileHover={{ y: -10 }}
               transition={{ type: "spring", stiffness: 300 }}
             >
                <Image 
                  src="/assets/astrologer.png"
                  alt="Shastri Shree Amit B. Trivedi"
                  width={450}
                  height={550}
                  className={styles.astrologerImage}
                  priority
                  onError={(e) => {
                    (e.target as any).src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
                  }}
                />
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
