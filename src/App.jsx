import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
import HomePage from "./pages/HomePage";

import "./App.css";
import ProfileSaved from "./components/Profile/ProfileSaved";
import Dashboard from "./components/Profile/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HeaderComponent /> */}
        <Routes>
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
