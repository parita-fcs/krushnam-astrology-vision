"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./FeaturedServices.module.css";
import { Check, Sparkles, Star } from "lucide-react";

const packages = [
  {
    title: "Basic Reading",
    price: "499",
    features: [
      "20-Minute Consultation",
      "Core Kundli Analysis",
      "One Question Answered",
      "Digital Horoscope Report"
    ],
    popular: false
  },
  {
    title: "Premium Guidance",
    price: "1499",
    features: [
      "45-Minute Consultation",
      "Deep Vedic Insights",
      "Relationship & Career",
      "3-Month Prediction Report",
      "Remedy Recommendations"
    ],
    popular: true
  },
  {
    title: "Yearly Path",
    price: "2999",
    features: [
      "Full Year Guidance",
      "Quarterly Follow-ups",
      "In-depth Life Roadmap",
      "Personalized Vastu Tips",
      "Direct Priority Support"
    ],
    popular: false
  }
];

export default function FeaturedServices() {
  return (
    <section className={styles.featured} id="pricing">
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <div className={styles.topLabel}>
            <Star size={16} />
            <span>Value Packages</span>
          </div>
          <h2 className={styles.title}>Invest in Your <br /> Cosmic Growth</h2>
          <p className={styles.subtitle}>
            Choose a plan that fits your needs. Whether it's a quick insight or a life-long journey, 
            we have the right path for you.
          </p>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              className={`${styles.card} ${pkg.popular ? styles.cardPopular : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {pkg.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              
              <h3 className={styles.cardTitle}>{pkg.title}</h3>
              <div className={styles.price}>
                <span className={styles.priceCurrency}>₹</span>
                {pkg.price}
              </div>

              <ul className={styles.features}>
                {pkg.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`btn ${pkg.popular ? "btn-primary" : "btn-secondary"}`}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
