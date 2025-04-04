import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RegisterForm from "./components/form/RegisterForm";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/form/LoginForm";
import "./App.css";
import React from "react";
import AboutPage from "./pages/AboutPage";
import Layout from "./route/Layout";
import AuthPage from "./pages/AuthPage";
import FileNotFound from "./components/filenotfound/FileNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route path="/courses" element={<h1>Courses Page</h1>} />
        <Route path="/courses/:id" element={<h1>Courses Page ID</h1>} />
        <Route
          path="/register"
          element={
            <AuthPage>
              <RegisterForm />
            </AuthPage>
          }
        />
        <Route
          path="/login"
          element={
            <AuthPage>
              <LoginForm />
            </AuthPage>
          }
        />
        <Route path="*" element={<FileNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
