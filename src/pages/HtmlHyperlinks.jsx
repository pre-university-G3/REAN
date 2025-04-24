import React from "react";
import Sidebar from "../components/learningpage/sideBar";
import Video from "../components/learningpage/Video";
import HeaderComponent from "../components/header/HeaderComponent";

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
        <Video>
        {children}
        </Video>
      </div>
    </main>
    
  </div>
    );
  }
  