"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import styles from "@/components/layout/PageHeader.module.css";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, src: "/assets/gallery/gallery_1.jpg", altKey: "gallery.photo_1" },
    { id: 2, src: "/assets/gallery/gallery_2.jpg", altKey: "gallery.photo_2" },
    { id: 3, src: "/assets/gallery/gallery_3.jpg", altKey: "gallery.photo_3" },
    { id: 4, src: "/assets/gallery/gallery_4.jpg", altKey: "gallery.photo_4" },
    { id: 5, src: "/assets/gallery/gallery_5.jpg", altKey: "gallery.photo_5" },
    { id: 6, src: "/assets/gallery/gallery_6.jpg", altKey: "gallery.photo_6" },
    { id: 7, src: "/assets/gallery/gallery_7.jpg", altKey: "gallery.photo_7" },
    { id: 8, src: "/assets/gallery/gallery_8.jpg", altKey: "gallery.photo_8" },
    { id: 9, src: "/assets/gallery/gallery_9.jpg", altKey: "gallery.photo_9" },
    { id: 10, src: "/assets/gallery/gallery_10.jpg", altKey: "gallery.photo_10" }
  ];

  return (
    <main style={{ backgroundColor: "#fdfdfd", minHeight: "100vh" }}>
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
            {t("gallery.page_header")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              color: "var(--primary)", 
              letterSpacing: "2px", 
              textTransform: "uppercase", 
              fontSize: "0.9rem", 
              fontWeight: 700,
              marginTop: "1.5rem",
              textAlign: "center"
            }}
          >
            {t("gallery.page_description")}
          </motion.p>
        </div>
      </section>

      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", 
            gap: "1.5rem" 
          }}>
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ 
                  position: "relative", 
                  height: "400px", 
                  borderRadius: "16px", 
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  backgroundColor: "#f5f5f5"
                }}
              >
                <Image
                  src={image.src}
                  alt={t(image.altKey)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ 
                    objectFit: "cover", 
                    transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: hoveredId === image.id ? "scale(1.15)" : "scale(1)"
                  }}
                  priority={index < 4}
                />
                
                {/* Overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(11, 22, 44, 0.95), transparent 60%)",
                  opacity: hoveredId === image.id ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "2rem"
                }}>
                  <motion.h3 
                    animate={{ y: hoveredId === image.id ? 0 : 20 }}
                    style={{ 
                      fontFamily: "var(--font-cinzel), serif", 
                      fontSize: "1.2rem",
                      color: "var(--primary)",
                      marginBottom: "0.5rem"
                    }}
                  >
                    {t(image.altKey)}
                  </motion.h3>
                  <motion.p
                    animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
                    style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", letterSpacing: "1px" }}
                  >
                    SHASTRI AMIT TRIVEDI
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
