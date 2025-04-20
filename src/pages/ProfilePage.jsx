import React from "react";
import Sidebar from "../components/Profile/Sidebar";

export default function ProfilePage({ children }) {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen w-full bg-gray-50 dark:bg-black">
      {/* Sidebar */}
      <div className="w-full lg:w-[250px] fixed lg:static top-0 left-0 z-50">
        <Sidebar />
      </div>

      {/* Page content */}
      <section className="w-full mt-[60px] lg:mt-0 lg:ml-10 p-5 lg:p-10">
        {children}
      </section>
    </main>
  );
}
