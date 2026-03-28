import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import About from "@/components/sections/About";
import PoojaSection from "@/components/sections/PoojaSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Services />
      <About />
      <PoojaSection />
      <Contact />
      <Footer />
    </main>
  );
}
