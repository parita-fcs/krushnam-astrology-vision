"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PoojaSection from "@/components/sections/PoojaSection";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/components/layout/PageHeader.module.css";
import { motion } from "framer-motion";

export default function PoojasPage() {
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
            {t("poojas.page_header")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ maxWidth: "700px", margin: "0 auto 2rem", opacity: 0.8, fontSize: "1.1rem" }}
          >
            {t("poojas.page_description")}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={styles.breadcrumb}
          >
            {t("nav.home")} / {t("poojas.page_header")}
          </motion.div>
        </div>
      </section>

      {/* Full Pooja Section without limit */}
      <PoojaSection showTitle={false} theme="light" />
      
      <Footer />
    </main>
  );
}
