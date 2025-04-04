import React from "react";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import "./App.css";
import DropDown from "./components/dropdown/DropDown";
// import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="*" element={<ProfilePage/>} />
          <Route path="*" element ={DropDown}/>
        </Routes>
      </BrowserRouter> */}
      <div>
        <DropDown />
      </div>
    </>
  );
}

export default App;
