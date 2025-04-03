<<<<<<< HEAD
import './App.css'
import SidebarComponent from './components/sidebar/SidebarComponent'
function App() {
  return (
    <>
      <SidebarComponent/>
    </>
  )
}
export default App
=======
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
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> a8f3971f6d3266ec6e3c1d0b6bd49b6c216bcb2c
