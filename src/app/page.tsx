import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import WritingSection from "@/components/WritingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedWorkSection />
        <WritingSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
