"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./PoojaSection.module.css";
import { Sparkles } from "lucide-react";

const remedies = [
  {
    image: "/assets/pooja.png",
    title: "Vedic Pooja",
    desc: "Traditional rituals performed with precise Vedic mantras for divine harmony and positive vibrations."
  },
  {
    image: "/assets/havan.png",
    title: "Sacred Havan",
    desc: "Purifying fire ceremonies to clear negative energy and bring prosperity to your home and life."
  },
  {
    image: "/assets/gemstones.png",
    title: "Blessed Gemstones",
    desc: "Authentic stones prescribed according to your birth chart to balance planetary influences."
  },
  {
    image: "/assets/mantra.png",
    title: "Mantra Jaap",
    desc: "Tailored sacred chanting sessions designed to realign your inner energy with cosmic frequencies."
  }
];

export default function PoojaSection() {
  return (
    <section className={styles.pooja} id="pooja">
      <div className={`${styles.container} container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.topLabel}>
            <Sparkles size={14} style={{ marginRight: '8px' }} />
            Sacred Remedies
          </span>
          <h2 className={styles.title}>Spiritual Healing & <br /> Divine Rituals</h2>
          <p className={styles.subtitle}>
            Bringing peace, balance, and prosperity through ancient Vedic rituals 
            and time-tested spiritual remedies.
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {remedies.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageBox}>
                <Image 
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

