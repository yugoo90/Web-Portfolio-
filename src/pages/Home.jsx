import {ThemeToggle} from "../component/ThemeToggle";
import {StarBackground} from "../component/StarBackground";
import { Navbar } from "../component/Navbar";
import { HeroSection } from "../component/HeroSection";
import { AboutSection } from "../component/AboutSection";
import { ProjectsSection } from "../component/ProjectsSection";
import { ContactSection } from "../component/ContactSection";
import { Footer } from "../component/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Backgorund Effect */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* footer */}
      <Footer />

    </div>
  );
};
