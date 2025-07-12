import { useState, useEffect } from "react";

import Navigation from "./components/NavigationSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/Contact";
import FooterSection from "./components/FooterSection";

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(true);
  

 
 useEffect(() => {
    // Inisialisasi AOS
    Aos.init({
      duration: 1000,  // Durasi animasi dalam milidetik
      easing: 'ease-out',  // Jenis easing
      once: true,  // Animasi hanya sekali ketika elemen masuk viewport
    });
  }, []);  

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
 
     

      <Navigation />


      <HeroSection isVisible={isVisible}  />


      <AboutSection />


      <SkillSection />

  
      <ProjectSection />

      <ContactSection />

  
      <FooterSection />
    </div>
  );
}

export default App;
