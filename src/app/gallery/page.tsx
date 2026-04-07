"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <main style={{ paddingTop: "120px", minHeight: "100vh", backgroundColor: "var(--bg-light)" }}>
      <Navbar />
      <div className="container" style={{ textAlign: "center" }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--secondary)", fontSize: "3rem", marginBottom: "2rem" }}
          >
            {t("nav.gallery")}
          </motion.h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.2rem" }}>
             Our gallery is being updated with sacred moments and spiritual events. Please visit soon!
          </p>
          
          <div style={{ marginTop: "4rem", opacity: 0.2, fontSize: "10rem" }}>☸️</div>
      </div>
      <Footer />
    </main>
  );
}
