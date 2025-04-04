import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
<<<<<<< HEAD
import HomePage from "./pages/HomePage";
=======
import FooterComponent from "./components/footer/FooterComponent";
>>>>>>> 249c9bd1a34a59600638b3be87e1d686d74b005b

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
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
