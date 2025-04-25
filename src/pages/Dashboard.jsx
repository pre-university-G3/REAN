import React from "react";
import SideBarComponent from "../components/dashboard/SideBarComponent";

export default function Dashboard({ children }) {
  return (
    <main className="flex">
      <div className="w-72">
        <SideBarComponent />
      </div>
      {children}
    </main>
  );
}
