"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Contact.module.css";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className={styles.contact} id="contact">
      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.infoSide}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.topLabel}>Contact Us</span>
            <h2 className={styles.title}>{t("contact.title")}</h2>
            <p className={styles.subtitle}>{t("contact.subtitle")}</p>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Phone size={24} /></div>
                <div className={styles.textDetails}>
                  <label>{t("contact.phone")}</label>
                  <p>(+91) 8160874164</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><Mail size={24} /></div>
                <div className={styles.textDetails}>
                  <label>{t("contact.email")}</label>
                  <p>amitshastri@gmail.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><MapPin size={24} /></div>
                <div className={styles.textDetails}>
                  <label>{t("contact.pob")}</label>
                  <p>Gadhada (Swamina), Dist. Botad, Gujarat</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaBox}>
               <h4>Prefer Instant Chat?</h4>
               <p>Connect immediately on WhatsApp for quick queries.</p>
               <Link href="https://wa.me/918160874164" target="_blank">
                 <button className={styles.whatsappBtn}>
                    <MessageCircle size={20} />
                    {t("contact.whatsapp")}
                 </button>
               </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.formSide}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.formCard}>
               <h3 className={styles.formHeading}>Book Your Consultation</h3>
               <form className={styles.form}>
                  <div className={styles.formGroup}>
                    <label>{t("contact.name")}</label>
                    <input type="text" placeholder="Your Full Name" required />
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+91 00000 00000" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Select Date</label>
                      <input type="date" required />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>{t("contact.message")}</label>
                    <textarea rows={4} placeholder="Tell us briefly about your concerns..." required></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: "100%" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    {t("contact.submit")}
                  </motion.button>
               </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <Link href="https://wa.me/918160874164" target="_blank" className={styles.floatingWhatsapp}>
          <MessageCircle size={32} />
          <span className={styles.tooltip}>Chat with us!</span>
      </Link>
    </section>
  );
}

