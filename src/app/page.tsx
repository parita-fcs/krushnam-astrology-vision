import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import QuoteBanner from "@/components/sections/QuoteBanner";
import PoojaSection from "@/components/sections/PoojaSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <QuoteBanner />
      <Services />
      <PoojaSection limit={6} />
      <GalleryPreview />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
