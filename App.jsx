import Header from "./components/Header";
import HeroSection from "./components/Hero";
import Join from "./components/Join";
import Mission from "./components/Mission";
import Explore from "./components/Explore";
import Membership from "./components/Membership";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <Join />
      <Mission />
      <Explore />
      <Membership />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
}
