import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
import HomePage from "./pages/HomePage";
import LearninPages from "./components/learning_side/LearningSide";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/courses" element={<h1>Courses Page</h1>} />
          <Route path="/leaning_pages" element={<LearninPages />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
