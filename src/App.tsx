import { useState, useEffect } from "react";

import Navigation from "./components/NavigationSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/Contact";
import FooterSection from "./components/FooterSection";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 


  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Floating cursor effect */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-150 ease-out"
        style={{
          // left: mousePosition.x - 12,
          // top: mousePosition.y - 12,
          // transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection isVisible={isVisible}  />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default App;
