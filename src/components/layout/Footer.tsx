"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.bottom}>
          <p>© {currentYear} Krushnam Astrology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
