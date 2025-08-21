import React from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import MentorsSection from "@/components/MentorsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <TeamSection />
      <MentorsSection />
      <StatsSection />
      <Footer />
    </>
  );
}
