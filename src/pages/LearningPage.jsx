import React from "react";
import LearningSide from "../components/learning-side/LearningSide";
import HeaderComponent from "../components/header/HeaderComponent";
import Content from "../components/content/Content";


export default function Layout({ children }) {
  return (
<div className="flex flex-col min-h-screen bg-white">
  {/* Header at the top */}
  <HeaderComponent />
  
  {/* Main content area with sidebar and content */}
  <main className="flex flex-1">
    <div className="flex flex-1">
      {/* Sidebar - will collapse on mobile */}
      <section>
        <LearningSide /> 
      </section>
      {/* Main content area */}
      <Content>
        {children}
      </Content>
    </div>
  </main>
  
</div>
  );
}
