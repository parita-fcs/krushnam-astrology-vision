"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
