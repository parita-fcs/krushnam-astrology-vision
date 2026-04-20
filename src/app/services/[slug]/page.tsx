"use client";

import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Phone, Calendar } from "lucide-react";
import Link from "next/link";

import headerStyles from "@/components/layout/PageHeader.module.css";
import styles from "./ServiceDetail.module.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t } = useLanguage();
  
  // Normalize the incoming slug to match our translation keys
  const normalizedSlug = String(slug)
    .trim()
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/\s+/g, '_') // Translation keys use underscores usually
    .replace(/-+/g, '_');

  // We need to fetch the service data from translations
  const title = t(`service_detail.${normalizedSlug}.title`);
  
  if (title === `service_detail.${normalizedSlug}.title`) {
    return (
      <main style={{ minHeight: "100vh", backgroundColor: "#fdfcf9" }}>
        <Navbar />
        <div className="container" style={{ padding: "160px 0", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-cinzel), serif", color: "#0b162c", marginBottom: "2rem" }}>
            {t("service_detail.service_not_found") || "Service Not Found"}
          </h2>
          <Link href="/services" className="primary-btn">{t("service_detail.back")}</Link>
        </div>
        <Footer />
      </main>
    );
  }

  // Extract arrays (benefits and process)
  const service = {
    title: t(`service_detail.${normalizedSlug}.title`),
    subtitle: t(`service_detail.${normalizedSlug}.subtitle`),
    description: t(`service_detail.${normalizedSlug}.description`),
    benefits: t(`service_detail.${normalizedSlug}.benefits`) as unknown as string[],
    process: t(`service_detail.${normalizedSlug}.process`) as unknown as string[]
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#fdfcf9" }}>
      <Navbar />
      
      {/* Page Header */}
      <section className={headerStyles.pageHeader}>
        <div className="container">
          <Link href="/services" style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "0.5rem", 
            color: "var(--primary)", 
            marginBottom: "1.5rem",
            textDecoration: "none",
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: "0.8rem",
            letterSpacing: "1px"
          }}>
            <ArrowLeft size={16} /> {t("service_detail.back")}
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={headerStyles.pageTitle}
            style={{ marginBottom: "0.5rem" }}
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: "var(--primary)", opacity: 0.8, letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.9rem", fontWeight: 700 }}
          >
            {service.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.serviceDetail}>
        <div className="container">
          <div className={styles.grid}>
            
            {/* Left Column */}
            <div>
              <div style={{ marginBottom: "4rem" }}>
                <h2 style={{ fontFamily: "var(--font-cinzel), serif", color: "#0b162c", marginBottom: "1.5rem" }}>
                  {t("service_detail.overview")}
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#555" }}>
                  {service.description}
                </p>
              </div>

              <div className={styles.statsGrid}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "1.4rem", color: "#0b162c", marginBottom: "1.5rem" }}>
                    {t("service_detail.benefits")}
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {Array.isArray(service.benefits) && service.benefits.map((benefit, i) => (
                      <li key={i} className={styles.benefitItem}>
                        <CheckCircle2 size={20} color="#C5A059" /> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "1.4rem", color: "#0b162c", marginBottom: "1.5rem" }}>
                    {t("service_detail.process")}
                  </h3>
                  <div style={{ position: "relative" }}>
                    {Array.isArray(service.process) && service.process.map((step, i) => (
                      <div key={i} className={styles.processStep}>
                        <span className={styles.stepNumber}>
                          {i + 1}
                        </span>
                        <p style={{ margin: 0, color: "#555" }}>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside>
              <div className={styles.sidebar}>
                <h3 style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "1.4rem", marginBottom: "1.5rem", textAlign: "center" }}>
                  {t("service_detail.book_title")}
                </h3>
                <p style={{ textAlign: "center", color: "#666", marginBottom: "2rem", fontSize: "0.9rem" }}>
                  {t("service_detail.book_subtitle")}
                </p>
                
                <a href="tel:+918160874164" className={styles.bookButtonPrimary}>
                  <Phone size={20} color="#C5A059" /> {t("service_detail.call_now")}
                </a>

                <Link href="/contact" className={styles.bookButtonSecondary}>
                  <Calendar size={20} /> {t("service_detail.schedule")}
                </Link>

                <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid #eee", textAlign: "center" }}>
                  <img src="/assets/logo.png" alt="Logo" style={{ height: "40px", opacity: 0.5 }} />
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
