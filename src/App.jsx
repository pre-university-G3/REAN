import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserProfile from "./components/Profile/UserProfile";
import UserEnroll from "./components/Profile/UserEnroll";
import ProfileSaved from "./components/Profile/ProfileSaved";
import Sidebar from "./components/Profile/Sidebar";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProfilePage>
                <UserProfile />
              </ProfilePage>
            }
          ></Route>
          <Route
            path="/my-course"
            element={
              <ProfilePage>
                <UserEnroll />
              </ProfilePage>
            }
          ></Route>
          <Route
            path="/saved"
            element={
              <ProfilePage>
                <ProfileSaved />
              </ProfilePage>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
