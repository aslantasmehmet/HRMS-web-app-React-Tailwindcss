import React from "react";
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Highlights from "../components/Highlights";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Highlights/>
    </div>
  );
}
