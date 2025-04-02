import React from "react";
import HeroSection from "../components/hompage/HeroSection";
import Sidebar from "../components/sidebar/SidebarComponent";
import App from "../App";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full items-center overflow-hidden">
      <HeroSection />
    </main>
  );
}
