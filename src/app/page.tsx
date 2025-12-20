import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TeamSection from "@/components/sections/TeamSection";
import WhatWeCanDoSection from "@/components/sections/WhatWeCanDoSection";
import NewsSection from "@/components/sections/NewsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ContactUsSection from "@/components/sections/ContactUsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main role="main" aria-label="主要內容">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <ProjectsSection />
        <TeamSection />
        <WhatWeCanDoSection />
        <NewsSection />
        <PartnersSection />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
}                                 