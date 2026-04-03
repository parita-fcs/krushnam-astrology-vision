import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Krushnam Astrology Vision | Trusted Vedic Astrology & Vastu Services",
  description: "Guiding your life with trusted Vedic astrology, Vastu, and Pooja services by Shastri Shree Amit B. Trivedi.",
  keywords: ["astrology", "vedic astrology", "vastu", "pooja", "kundli", "krushnam astrology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
