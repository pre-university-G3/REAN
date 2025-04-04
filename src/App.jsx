import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import FileNotFound from "./components/filenotfound/FileNotFound";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/courses" element={<h1>Courses Page</h1>} />
        <Route path="*" element={<FileNotFound />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
