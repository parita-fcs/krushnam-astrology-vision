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
        <div className={styles.header}>
            <span className={styles.topLabel}>{t("contact.top_label")}</span>
            <h2 className={styles.title}>{t("contact.title")}</h2>
            <p className={styles.subtitle}>{t("contact.subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {/* Info Side - 6/6 */}
          <motion.div 
            className={styles.infoSideVertical}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
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
                  <a href="mailto:amit.trivedi0981@gmail.com" className={styles.contactLink}>
                    amit.trivedi0981@gmail.com
                  </a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconBox}><MapPin size={24} /></div>
                <div className={styles.textDetails}>
                  <label>{t("contact.pob")}</label>
                  <p>Gadhada (Swamina), Dist. Botad, Gujarat (India)</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaBox}>
               <h4 className={styles.ctaTitle}>{t("contact.whatsapp_title")}</h4>
               <p className={styles.ctaDesc}>{t("contact.whatsapp_desc")}</p>
               <Link href="https://wa.me/918160874164" target="_blank" className={styles.whatsappLink}>
                 <motion.button 
                   className={styles.whatsappBtnInBox}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                 >
                    <MessageCircle size={20} />
                    {t("contact.whatsapp")}
                 </motion.button>
               </Link>
            </div>
          </motion.div>
          
          {/* Form Side - 6/6 */}
          <motion.div 
            className={styles.formSide}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.formCard}>
               <h3 className={styles.formHeading}>{t("contact.form_heading")}</h3>
               <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.formGroup}>
                    <label>{t("contact.name")}</label>
                    <input type="text" placeholder={t("contact.name_placeholder")} required />
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>{t("contact.phone_label")}</label>
                      <input type="tel" placeholder="+91 00000 00000" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>{t("contact.date_label")}</label>
                      <input type="date" required />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>{t("contact.message")}</label>
                    <textarea rows={4} placeholder={t("contact.msg_placeholder")} required></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className={styles.submitBtn} 
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

        {/* Map Integration - 12/12 */}
        <motion.div 
          className={styles.mapWrapperFull}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: "4rem" }}
        >
           <iframe 
              src="https://maps.google.com/maps?q=21.9761995,71.573847&z=17&output=embed" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: "25px" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

