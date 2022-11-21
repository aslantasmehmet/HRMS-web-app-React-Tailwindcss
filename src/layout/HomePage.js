import React from "react";
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import CurrentListings from "../components/CurrentListings"
import CareerGuide from "../components/CareerGuide"
import Campaigns from "../components/Campaigns"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Campaigns/>
      <CurrentListings/>
      <CareerGuide/>
      <Footer/>
    
    </div>
  );
}
