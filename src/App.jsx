import React from "react";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HeaderComponent /> */}
        <Routes>
          <Route path="*" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
