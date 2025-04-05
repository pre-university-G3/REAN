// src/pages/Introduction.jsx
import React from "react";
import LearningSide from "../components/learning-side/LearningSide";
import HeaderComponent from "../components/header/HeaderComponent";
import Content from "../components/content/Content";

export default function Introduction() {
  return (
        <div className="flex flex-col min-h-screen bg-white">
          <HeaderComponent />
          <div className="flex flex-1">
            {/* <Content>{children}</Content> */}
            <LearningSide />
          </div>
        </div>
  );
}