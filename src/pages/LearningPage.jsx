import React from "react";
import Sidebar from "../components/learningpage/sideBar.jsx";
import LearningContent from "../components/learningpage/LearningContent.jsx";
import HeaderComponent from "../components/header/HeaderComponent.jsx";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header at the top */}
      <header>
        <HeaderComponent />
      </header>

      {/* Main content area with sidebar and content */}
      <main className="flex flex-1">
        <div className="flex flex-1">
          {/* Sidebar on mobile */}
          <section>
            <Sidebar />
          </section>
          {/* Main content area */}
          <LearningContent>{children}</LearningContent>
        </div>
      </main>
    </div>
  );
}
