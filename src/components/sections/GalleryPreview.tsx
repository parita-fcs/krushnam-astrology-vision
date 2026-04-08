"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./GalleryPreview.module.css";
import { ArrowRight } from "lucide-react";

const previewImages = [
  { id: 1, src: "/assets/gallery/gallery_1.jpg", altKey: "gallery.photo_1" },
  { id: 2, src: "/assets/gallery/gallery_2.jpg", altKey: "gallery.photo_2" },
  { id: 3, src: "/assets/gallery/gallery_3.jpg", altKey: "gallery.photo_3" },
  { id: 4, src: "/assets/gallery/gallery_4.jpg", altKey: "gallery.photo_4" },
];

export default function GalleryPreview() {
  const { t } = useLanguage();

  return (
    <section className={styles.galleryPreview}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.topLabel}>{t("gallery.title")}</span>
            <h2 className={styles.title}>{t("gallery.page_header")}</h2>
          </div>
          <Link href="/gallery" className={styles.viewAllBtn}>
            {t("common.view_all")} <ArrowRight size={18} />
          </Link>
        </div>

        <div className={styles.grid}>
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={styles.imageCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={image.src}
                alt={t(image.altKey)}
                fill
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.photoTitle}>{t(image.altKey)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
