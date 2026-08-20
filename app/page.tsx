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
    <div className="min-h-screen relative" style={{ zIndex: 10 }}>
      <GlobalParticles />
      <CustomCursor />
      <Header />

      <main>
        <Hero />
        <div className="divider" />
        <SelectedWork />
        <div className="divider" />
        <About />
        <div className="divider" />
        <TechStack />
        <div className="divider" />
        <CaseStudies />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Achievements />
        <div className="divider" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
