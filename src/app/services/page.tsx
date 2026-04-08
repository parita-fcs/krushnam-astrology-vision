"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <main>
      <Navbar />
      
      {/* Services Page Header */}
      <section style={{ 
        padding: "160px 0 80px", 
        background: "linear-gradient(rgba(11, 22, 44, 0.9), rgba(11, 22, 44, 0.9)), url('/assets/astrology_slide_1.png')",
        backgroundSize: "cover",
        color: "white",
        textAlign: "center"
      }}>
        <div className="container">
          <h1 style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "3.5rem", marginBottom: "1rem" }}>
            {t("services.page_header")}
          </h1>
          <p style={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto", opacity: 0.8 }}>
            {t("services.page_description")}
          </p>
        </div>
      </section>

      <div style={{ backgroundColor: "#fff" }}>
        <Services isPage={true} />
      </div>
      
      <Footer />
    </main>
  );
}
