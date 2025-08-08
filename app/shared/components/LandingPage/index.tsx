"use client";
import { useState } from "react";
import { useScrollTracking } from "../../hooks/useScrollTracking";
import { scrollToSection } from "../../utils/sectionNavigate";
import { About } from "../About";
import { Header } from "../Header";
import { Hero } from "../Hero";
import { Experience } from "../Experience";
import { Education } from "../Education";
import { Footer } from "../Footer";
import { Projects } from "../Projects";

export const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const activeSection = useScrollTracking();
  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };
  return (
    <div className='min-h-screen transition-colors duration-300 dark bg-gray-900 text-white'>
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={handleScrollToSection}
      />
      <Hero scrollToSection={handleScrollToSection} />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
};
