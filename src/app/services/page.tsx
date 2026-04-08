"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import styles from "@/components/layout/PageHeader.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main>
      <Navbar />
      
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.pageTitle}
          >
            {t("services.page_header")}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className={styles.breadcrumb}
          >
            {t("nav.home")} / {t("nav.services")}
          </motion.div>
        </div>
      </section>

      <div style={{ backgroundColor: "#fff" }}>
        <Services isPage={true} />
      </div>
      
      <Footer />
    </main>
  );
}
