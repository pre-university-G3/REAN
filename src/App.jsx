import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RegisterForm from "./components/form/RegisterForm";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/form/LoginForm";
import "./App.css";
import React from "react";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<h1>Courses Page</h1>} />
        <Route path="/courses/:id" element={<h1>Courses Page ID</h1>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
