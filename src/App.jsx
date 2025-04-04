import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LearningPage from "./pages/LearningPage";
import HeaderComponent from "./components/header/HeaderComponent";
import LearninPages from "./pages/LearningPage";
import Introduction from "./pages/Introduction";
import Elements from "./pages/Element";
import Basic from "./pages/Basic";
import Editors from "./pages/Editors";


function App() {
  return (
    <Router> 
      <main>
        <Routes>
          <Route path="/" element={<LearninPages />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="editors" element={<Editors />} />
          <Route path="basic" element={<Basic />} />
          <Route path="elements" element={<Element />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
