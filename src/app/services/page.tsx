"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <Navbar />
      <Services />
      <Footer />
    </main>
  );
}
