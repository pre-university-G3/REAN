import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserProfile from "./components/Profile/UserProfile";
import UserEnroll from "./components/Profile/UserEnroll";
import ProfileSaved from "./components/Profile/ProfileSaved";
import Sidebar from "./components/Profile/Sidebar";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <Sidebar/>
          <div className="flex-1 p-6">
            <Routes>
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/my-course" element={<UserEnroll />} />
                <Route path="/saved" element={<ProfileSaved />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
