import React from "react";
import LearningSide from "../components/learning-side/LearningSide";
import HeaderComponent from "../components/header/HeaderComponent";
import Content from "../components/content/Content";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
            <div className="flex flex-1">
      
      <Content>{children}</Content>
      <LearningSide />
      </div>
      <HeaderComponent/>

    </div>
  );
}
