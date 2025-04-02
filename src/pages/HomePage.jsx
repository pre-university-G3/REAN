import React from "react";
import HeroSection from "../components/hompage/hero/HeroSection";
import PopularCourses from "../components/hompage/popularcourse/PopularCourses";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full items-center space-y-24 overflow-x-hidden">
      <HeroSection className="overflow-clip" />
      <PopularCourses />
    </main>
  );
}
