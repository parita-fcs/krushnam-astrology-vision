"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppFAB.module.css";

export default function WhatsAppFAB() {
  const whatsappNumber = "8160874164"; // Shastri Shree Amit B. Trivedi
  const message = "Namaste! I'm interested in a consultation with Shastri Shree Amit B. Trivedi.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.fabWrapper}>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.fab}
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className={styles.tooltip}>Chat with us</span>
      </a>
    </div>
  );
}
