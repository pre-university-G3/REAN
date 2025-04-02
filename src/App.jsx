import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
import HomePage from "./pages/HomePage";

import "./App.css";
import SidebarComponent from "./components/sidebar/SidebarComponent";
function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/courses" element={<h1>Courses Page</h1>} />
        <Route
          path="/profile"
          element={
            <h1>
              <SidebarComponent />
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
