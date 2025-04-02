import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/courses" element={<h1>Courses Page</h1>} />
        <Route path="/courses/:id" element={<h1>Courses Page ID</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
