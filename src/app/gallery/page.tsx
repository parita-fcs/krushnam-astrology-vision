"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import styles from "@/components/layout/PageHeader.module.css";

export default function GalleryPage() {
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
            {t("gallery.title")}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className={styles.breadcrumb}
          >
            {t("nav.home")} / {t("nav.gallery")}
          </motion.div>
        </div>
      </section>

      <div style={{ padding: "80px 0", backgroundColor: "#fff", textAlign: "center" }}>
        <div className="container">
          <p style={{ color: "var(--text-muted)", fontSize: "1.2rem" }}>
             {t("gallery.updating")}
          </p>
          <div style={{ marginTop: "4rem", opacity: 0.2, fontSize: "10rem" }}>☸️</div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
