import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LearningPage from "./pages/LearningPage";
import HeaderComponent from "./components/header/HeaderComponent";
import LearninPages from "./pages/LearningPage";


function App() {
  return (
    <Router> 
      <main>
        <Routes>
          <Route path="/" element={<LearninPages />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
