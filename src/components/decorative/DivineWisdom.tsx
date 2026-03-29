"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from "@/context/LanguageContext";
import styles from './DivineWisdom.module.css';

const wisdomQuotes = [
  "Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.",
  "You have a right to your actions, but never to the fruits of your actions.",
  "The soul is neither born, nor does it die.",
  "Change is the law of the universe. You can be a millionaire, or a pauper in an instant.",
  "Yoga is the journey of the self, through the self, to the self.",
  "Man is made by his belief. As he believes, so he is."
];

export default function DivineWisdom() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % wisdomQuotes.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wisdomContainer}>
      <motion.div 
        className={styles.featherToggle}
        whileHover={{ scale: 1.1, rotate: 10 }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        <svg viewBox="0 0 50 100" fill="var(--secondary)" width="40" height="80">
           <path d="M25 95C25 70 25 40 25 10" stroke="currentColor" strokeWidth="1" />
           <path d="M25 10C5 30 10 70 25 90C40 70 45 30 25 10Z" opacity="0.4" fill="currentColor" />
           <circle cx="25" cy="30" r="10" opacity="0.3" fill="var(--primary)" />
        </svg>
        <span className={styles.toggleLabel}>Wisdom</span>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.wisdomCard}
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 100 }}
          >
             <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>&times;</button>
             <div className={styles.cardHeader}>
                <svg viewBox="0 0 100 20" fill="var(--secondary)" width="60" style={{ marginBottom: '10px' }}>
                  <rect x="5" y="8" width="80" height="4" rx="2" />
                  <path d="M85 10C88 10 90 7 92 8C94 9 95 12 92 13C90 14 88 11 85 11V10Z" />
                </svg>
                <h4>Eternal Wisdom</h4>
             </div>
             <p>"{wisdomQuotes[quoteIndex]}"</p>
             <span className={styles.source}>— Shrimad Bhagavad Gita</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
