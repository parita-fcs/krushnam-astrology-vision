"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Home, User, Scroll, Image, Phone } from "lucide-react";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("nav.home"), icon: <Home size={20} /> },
    { href: "/about", label: t("nav.about"), icon: <User size={20} /> },
    { href: "/services", label: t("nav.services"), icon: <Scroll size={20} /> },
    { href: "/gallery", label: t("nav.gallery"), icon: <Image size={20} /> },
    { href: "/contact", label: t("nav.contact"), icon: <Phone size={20} /> },
  ];

  return (
    <nav className={styles.bottomNav}>
      <div className={styles.container}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`${styles.navItem} ${isActive ? styles.active : ""}`}
            >
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <span className={styles.label}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
