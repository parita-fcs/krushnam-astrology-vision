"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Hero.module.css";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  {
    image: "/assets/astrology_slide_1.png",
    titleKey: "hero.slide1.title",
    descKey: "hero.slide1.desc",
    defaultTitle: "Vedic Astrology Guidance",
    defaultDesc: "Unlock your future with profound Vedic insights and precise birth chart analysis."
  },
  {
    image: "/assets/astrology_slide_2.png",
    titleKey: "hero.slide2.title",
    descKey: "hero.slide2.desc",
    defaultTitle: "Cosmic Insights",
    defaultDesc: "Understand the movements of the stars and how they influence your life path."
  },
  {
    image: "/assets/astrology_slide_3.png",
    titleKey: "hero.slide3.title",
    descKey: "hero.slide3.desc",
    defaultTitle: "Divine Wisdom",
    defaultDesc: "Blend traditional Indian spiritual teachings with modern intuitive guidance."
  },
  {
    image: "/assets/astrology_slide_4.png",
    titleKey: "hero.slide4.title",
    descKey: "hero.slide4.desc",
    defaultTitle: "Find Your Path",
    defaultDesc: "Empower yourself with celestial clarity to navigate life's complexities."
  }
];

export default function Hero() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.sliderContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src={slides[current].image}
              alt="Astrology Slide"
              fill
              className={styles.slideImage}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <button className={`${styles.navBtn} ${styles.next}`} onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className={styles.indicators}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${current === index ? styles.dotActive : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        {/* Scroll Indicator */}

      </div>
    </section>
  );
}
