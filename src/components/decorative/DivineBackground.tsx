"use client";

import React from 'react';
import styles from './DivineBackground.module.css';
import { motion } from 'framer-motion';

const KrishnaIcons = {
  Flute: () => (
    <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15H100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="25" cy="15" r="1.5" fill="white" />
      <circle cx="40" cy="15" r="1.5" fill="white" />
      <circle cx="55" cy="15" r="1.5" fill="white" />
      <circle cx="70" cy="15" r="1.5" fill="white" />
      <circle cx="85" cy="15" r="1.5" fill="white" />
      {/* Peacock Feather attached to flute */}
      <path d="M100 15C105 5 115 10 110 20C105 30 95 25 100 15Z" fill="var(--secondary)" fillOpacity="0.3" />
    </svg>
  ),
  Morpankh: () => (
    <svg viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 95C25 70 25 40 25 10" stroke="currentColor" strokeWidth="1" />
      <path d="M25 10C5 30 10 70 25 90C40 70 45 30 25 10Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.5" />
      <ellipse cx="25" cy="35" rx="10" ry="15" fill="var(--secondary)" fillOpacity="0.2" />
      <circle cx="25" cy="35" r="5" fill="var(--primary)" fillOpacity="0.3" />
      {/* Decorative strands */}
      {[...Array(8)].map((_, i) => (
        <path key={i} d={`M25 ${20 + i * 8} L${10 + i % 2 * 30} ${15 + i * 8}`} stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
      ))}
    </svg>
  ),
  Footprint: () => (
    <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="25" rx="8" ry="10" />
      <circle cx="12" cy="10" r="3" />
      <circle cx="18" cy="8" r="3" />
      <circle cx="24" cy="9" r="3" />
      <circle cx="30" cy="11" r="2.5" />
    </svg>
  ),
  Matki: () => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15C10 10 30 10 30 15C30 35 10 35 10 15Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
      <path d="M12 15Q20 12 28 15" stroke="currentColor" strokeWidth="1" />
      <path d="M15 12V8H25V12" stroke="currentColor" strokeWidth="1" />
      {/* Butter dripping */}
      <path d="M20 15L18 22Q20 25 22 22L20 15Z" fill="white" />
    </svg>
  ),
  Lotus: () => (
    <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5C20 5 15 15 20 25C25 15 20 5 20 5Z" opacity="0.6" />
      <path d="M20 5C20 5 25 15 35 20C25 25 20 15 20 5Z" opacity="0.4" />
      <path d="M20 5C20 5 15 15 5 20C15 25 20 15 20 5Z" opacity="0.4" />
      <path d="M20 35C20 35 10 30 10 20C10 10 20 15 20 15C20 15 30 10 30 20C30 30 20 35 20 35Z" opacity="0.5" />
    </svg>
  )
};

const GitaThoughts = [
  "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
  "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः",
  "योगः कर्मसु कौशलम्",
  "Whatever happened, happened for the good",
  "Everything happens for a divine reason",
  "Change is the law of the universe"
];

export default function DivineBackground() {
  return (
    <div className={styles.divineWrapper}>
      {/* Decorative Corner Patterns (Rangoli style) */}
      <div className={styles.rangoliCornerTopLeft}></div>
      <div className={styles.rangoliCornerBottomRight}></div>

      {/* Floating Icons Layer */}
      <div className={styles.iconLayer}>
        {/* Cute Baby Krishna Footprints path */}
        {[...Array(4)].map((_, i) => (
          <motion.div 
            key={`foot-${i}`}
            className={styles.floatingIcon} 
            style={{ 
              top: `${20 + i * 15}%`, 
              left: `${10 + (i % 2 === 0 ? 0 : 5)}%`, 
              color: 'var(--secondary)', 
              opacity: 0.04, 
              width: '30px',
              transform: `rotate(${i % 2 === 0 ? 20 : -20}deg)`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            transition={{ delay: i * 0.5 }}
          >
            <KrishnaIcons.Footprint />
          </motion.div>
        ))}
        
        <motion.div 
          className={styles.floatingIcon} 
          style={{ top: '15%', right: '10%', color: 'var(--secondary)', opacity: 0.06, width: '100px' }}
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <KrishnaIcons.Flute />
        </motion.div>
        
        <motion.div 
          className={styles.floatingIcon} 
          style={{ top: '45%', left: '8%', color: 'var(--secondary)', opacity: 0.08, width: '60px' }}
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <KrishnaIcons.Morpankh />
        </motion.div>

        <motion.div 
          className={styles.floatingIcon} 
          style={{ bottom: '30%', right: '15%', color: 'var(--secondary)', opacity: 0.05, width: '50px' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <KrishnaIcons.Matki />
        </motion.div>

        <motion.div 
          className={styles.floatingIcon} 
          style={{ top: '75%', left: '20%', color: 'var(--secondary)', opacity: 0.04, width: '40px' }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <KrishnaIcons.Lotus />
        </motion.div>
      </div>

      {/* Floating Quotes Layer */}
      <div className={styles.quoteLayer}>
        {GitaThoughts.map((thought, index) => (
          <div 
            key={index}
            className={styles.bgQuote}
            style={{
              top: `${(index + 1) * 16}%`,
              left: index % 2 === 0 ? '8%' : 'auto',
              right: index % 2 !== 0 ? '8%' : 'auto',
              transform: `rotate(${index % 2 === 0 ? -12 : 12}deg)`,
              opacity: 0.02 + (index * 0.003)
            }}
          >
            {thought}
          </div>
        ))}
      </div>

      {/* Little Krishna Illustration in Corner (Cute touch) */}
      <div className={styles.cuteKrishnaCorner}>
         <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="40" r="15" fill="var(--secondary)" fillOpacity="0.1" />
            <path d="M40 55Q50 75 60 55" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
            <path d="M35 40Q50 35 65 40" stroke="var(--secondary)" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
            <path d="M50 15L52 5Q55 0 60 5Q65 10 55 15" fill="var(--secondary)" fillOpacity="0.4" />
         </svg>
      </div>
    </div>
  );
}
