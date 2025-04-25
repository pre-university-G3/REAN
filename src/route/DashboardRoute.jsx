import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProfileDashboard from "../components/dashboard/ProfileDashboard";

export default function DashboardRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard>
              <ProfileDashboard />
            </Dashboard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
