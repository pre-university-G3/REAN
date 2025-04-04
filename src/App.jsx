import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
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
