import React from "react";
import HeroSection from "../components/hompage/hero/HeroSection";
import PopularCourses from "../components/hompage/popularcourse/PopularCourses";
import AboutSection from "../components/hompage/about/AboutSection";
import OfferCourse from "../components/hompage/offercourse/OfferCourse";
import Faq from "../components/hompage/faq/Faq";
import ClientFeedback from "../components/hompage/clientfeedback/ClientFeedback";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full items-center space-y-24 overflow-x-hidden">
      <HeroSection />
      <PopularCourses />
      <AboutSection />
      <OfferCourse />
      <Faq />
      <ClientFeedback />
    </main>
  );
}
