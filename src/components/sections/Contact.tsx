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
               <form 
                  className={styles.form} 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("name");
                    const phone = formData.get("phone");
                    const date = formData.get("date");
                    const service = formData.get("service");
                    const pooja = formData.get("pooja");
                    const message = formData.get("message");
                    
                    let wpMessage = `*Jay Shree Krishna!*%0AWe have received a new inquiry from the website.%0A%0A`;
                    wpMessage += `*Name:* ${name}%0A`;
                    wpMessage += `*Phone:* ${phone}%0A`;
                    wpMessage += `*Date:* ${date}%0A`;
                    if (service) {
                      wpMessage += `*Service:* ${service}%0A`;
                    }
                    if (pooja && (service === "Vedic Pooja & Yagya" || service === "વૈદિક પૂજા અને યજ્ઞ" || service === "वैदिक पूजा और यज्ञ")) {
                      wpMessage += `*Ritual:* ${pooja}%0A`;
                    }
                    wpMessage += `*Message:* ${message}`;
                    
                    window.open(`https://wa.me/918160874164?text=${wpMessage}`, '_blank');
                  }}
               >
                  <div className={styles.formGroup}>
                    <label>{t("contact.name")}</label>
                    <input name="name" type="text" placeholder={t("contact.name_placeholder")} required />
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>{t("contact.phone_label")}</label>
                      <input name="phone" type="tel" placeholder="+91 92744 21388" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label>{t("contact.date_label")}</label>
                      <input name="date" type="date" required />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>{t("contact.service_label")}</label>
                      <select name="service" className={styles.selectInput}>
                        <option value="">-- {t("contact.service_label")} --</option>
                        {(t("contact.services_options") as string[] || []).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label>{t("contact.pooja_label")}</label>
                      <select name="pooja" className={styles.selectInput}>
                        <option value="">-- {t("contact.pooja_label")} --</option>
                        {(t("contact.poojas_options") as string[] || []).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>{t("contact.message")}</label>
                    <textarea name="message" rows={4} placeholder={t("contact.msg_placeholder")} required></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className={styles.submitBtn} 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle size={18} />
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

