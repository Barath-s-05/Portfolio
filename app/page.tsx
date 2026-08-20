"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import SelectedWork from "@/app/components/SelectedWork";
import About from "@/app/components/About";
import WhatIBuild from "@/app/components/WhatIBuild";
import TechStack from "@/app/components/TechStack";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/ui/Footer";
import CustomCursor from "@/app/components/ui/CustomCursor";
import GlobalParticles from "@/app/components/ui/GlobalParticles";

const HomePage = () => {
  return (
    <div className="grain" style={{ position: "relative", zIndex: 1 }}>
      <GlobalParticles />
      <CustomCursor />
      <Header />

      <main>
        <Hero />
        <SelectedWork />
        <About />
        <WhatIBuild />
        <TechStack />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
