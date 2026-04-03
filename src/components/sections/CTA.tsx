"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./CTA.module.css";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={`${styles.container} container`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Let the Stars Guide Your Future</h2>
          <p className={styles.text}>
            Unlock the hidden potential of your cosmic blueprint. Whether you're seeking 
            clarity in career, love, or personal growth, our Vedic wisdom is here to illuminate your path.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn"
            style={{ backgroundColor: 'white', color: 'var(--primary)' }}
          >
            Start Your Journey Now
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
