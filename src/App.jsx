import "./App.css";
import React from "react";
import HeaderComponent from "./components/header/HeaderComponent"
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import CourseDetail from "./pages/CourseDetail";
import FooterComponent from "./components/footer/FooterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<CourseDetail/>} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>

    </>
  );
}

export default App;
