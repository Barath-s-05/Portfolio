"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import SelectedWork from "@/app/components/SelectedWork";
import About from "@/app/components/About";
import TechStack from "@/app/components/TechStack";
import CaseStudies from "@/app/components/CaseStudies";
import Experience from "@/app/components/Experience";
import Achievements from "@/app/components/Achievements";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/ui/Footer";
import CustomCursor from "@/app/components/ui/CustomCursor";
import GlobalParticles from "@/app/components/ui/GlobalParticles";

const HomePage = () => {
  return (
    <div className="min-h-screen relative z-10 overflow-hidden">
      <GlobalParticles />
      <CustomCursor />
      <Header />

      <main>
        <Hero />
        <div className="section-divider" />
        <SelectedWork />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <TechStack />
        <div className="section-divider" />
        <CaseStudies />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Achievements />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
