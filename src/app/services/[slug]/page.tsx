"use client";

import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Phone, Calendar } from "lucide-react";
import Link from "next/link";

import styles from "@/components/layout/PageHeader.module.css";

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
      <section className={styles.pageHeader}>
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
            className={styles.pageTitle}
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
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "4rem" }} className="mobile-grid">
            
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

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "4rem" }} className="mobile-stats">
                <div>
                  <h3 style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "1.4rem", color: "#0b162c", marginBottom: "1.5rem" }}>
                    {t("service_detail.benefits")}
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {Array.isArray(service.benefits) && service.benefits.map((benefit, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem", color: "#555" }}>
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
                      <div key={i} style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
                        <span style={{ 
                          width: "30px", 
                          height: "30px", 
                          borderRadius: "50%", 
                          backgroundColor: "#C5A059", 
                          color: "white", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          flexShrink: 0
                        }}>
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
              <div style={{ 
                padding: "2.5rem", 
                backgroundColor: "#fff", 
                borderRadius: "20px", 
                border: "1px solid rgba(197, 160, 89, 0.3)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                position: "sticky",
                top: "120px"
              }}>
                <h3 style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "1.4rem", marginBottom: "1.5rem", textAlign: "center" }}>
                  {t("service_detail.book_title")}
                </h3>
                <p style={{ textAlign: "center", color: "#666", marginBottom: "2rem", fontSize: "0.9rem" }}>
                  {t("service_detail.book_subtitle")}
                </p>
                
                <a href="tel:+918160874164" style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "1rem",
                  padding: "1rem", 
                  backgroundColor: "#0b162c", 
                  color: "#fff", 
                  borderRadius: "12px", 
                  textDecoration: "none",
                  fontWeight: 600,
                  marginBottom: "1rem"
                }}>
                  <Phone size={20} color="#C5A059" /> {t("service_detail.call_now")}
                </a>

                <Link href="/contact" style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "1rem",
                  padding: "1rem", 
                  backgroundColor: "transparent", 
                  color: "#0b162c", 
                  borderRadius: "12px", 
                  border: "2px solid #C5A059",
                  textDecoration: "none",
                  fontWeight: 600
                }}>
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
