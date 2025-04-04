import "./App.css";
import React from "react";
import HeaderComponent from "./components/header/HeaderComponent"
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
      <CourseDetail />
    </>
  );
}

export default App;
