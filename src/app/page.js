import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import BannerSection from "./components/BannerSection";

export default function Home() {
  return (
    <div>
      <BannerSection></BannerSection>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <h1>Home</h1>
    </div>
  );
}
