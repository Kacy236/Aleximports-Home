"use client";

import FloatingNav from "@/components/floating-nav";
import NavBar, { HiddenNav } from "@/components/navbar";
import AboutSection from "@/components/sections/about-us";
import CallToActionSection from "@/components/sections/call-to-action";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import OurServices from "@/components/sections/our-services";
import MeetOurTeam from "@/components/sections/about-us";
import SocialProof from "@/components/sections/social-proof";
import TestimonalSection from "@/components/sections/testimonials-section";
import Booker from "@/components/cal-component";
import HeroSectionTwo from "@/components/sections/hero-section-two.homepage";
import SecondHero from "@/components/sections/second-hero";

export default function Home() {
  return (
    <div className="relative z-10">
      {/* Navbar */}
      <div className="md:hidden">
        {/* Mobile Navbar */}
        <NavBar />
        <HiddenNav />
      </div>

      <div className="hidden md:block">
        {/* Desktop Navbar */}
        <NavBar />
        <HiddenNav />
      </div>

      {/* Hero Sections */}
      <div className="w-full">
        <HeroSection />
        <SecondHero />
        <HeroSectionTwo />
      </div>

      {/* Floating Booker */}
      <div className="w-full">
        <Booker />
      </div>

      {/* Content Sections */}
      <div className="w-full px-4 md:px-16 space-y-12">
        <SocialProof />
        <AboutSection />
        <OurServices />
        <TestimonalSection />
        <CallToActionSection />
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
