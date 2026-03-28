"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Contact.module.css";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className={styles.contact} id="contact">
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t("contact.title")}</h2>
          <div className="section-divider" style={{ margin: "1rem auto" }}></div>
        </motion.div>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.info}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><Phone size={24} /></div>
              <div>
                <span className={styles.infoLabel}>{t("contact.phone")}</span>
                <span className={styles.infoValue}>(+91) 8160874164</span>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><Mail size={24} /></div>
              <div>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>amitshastri@gmail.com</span>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><MapPin size={24} /></div>
              <div>
                <span className={styles.infoLabel}>{t("contact.address")}</span>
                <span className={styles.infoValue}>{t("contact.address_val")}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.formBox}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <form>
               <div className={styles.row}>
                 <div className={styles.formGroup}>
                   <label>Your Name</label>
                   <input type="text" placeholder="Full Name" />
                 </div>
                 <div className={styles.formGroup}>
                   <label>Phone Number</label>
                   <input type="tel" placeholder="Your Phone" />
                 </div>
               </div>
               
               <div className={styles.formGroup}>
                 <label>Subject</label>
                 <select style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid #E0E0E0", background: "#FAFAFA" }}>
                   <option>Kundli Analysis</option>
                   <option>Vedic Pooja</option>
                   <option>Vastu Consultation</option>
                   <option>Other</option>
                 </select>
               </div>
               
               <div className={styles.formGroup}>
                 <label>Message</label>
                 <textarea rows={4} placeholder="Your Message..."></textarea>
               </div>
               
               <button className="btn btn-primary" style={{ width: "100%" }}>
                 <Send size={18} /> Send Message
               </button>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
