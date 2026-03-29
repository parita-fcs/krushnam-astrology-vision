import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import KundliForm from "@/components/sections/KundliForm";
import PoojaSection from "@/components/sections/PoojaSection";
import Testimonials from "@/components/sections/Testimonials";
import Horoscope from "@/components/sections/Horoscope";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <div className="cosmic-overlay"></div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <KundliForm />
      <PoojaSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

