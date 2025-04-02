import React from "react";
import { FaUser, FaBookOpen, FaBookmark } from "react-icons/fa"; // Import icons

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-md p-6 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 mb-10">
        <div className="text-3xl font-bold" aria-label="Logo">🎓</div>
        <span className="text-xl font-semibold text-gray-800">Rean</span>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col space-y-4" aria-label="Sidebar Navigation">
        {/* Profile Button */}
        <a
          className="flex items-center space-x-3 hover:bg-gray-800 text-gray-800 hover:text-white px-4 py-2 rounded-lg"
          href="/profile"
          aria-label="Go to Profile"
        >
          <FaUser className="text-xl" />
          <span className="font-medium">Profile</span>
        </a>

        {/* Courses Button */}
        <a
          className="flex items-center space-x-3 hover:bg-gray-800 text-gray-800 hover:text-white px-4 py-2 rounded-lg"
          href="/courses"
          aria-label="Go to Courses"
        >
          <FaBookOpen className="text-xl" />
          <span className="font-medium">Courses</span>
        </a>

        {/* Saved Button */}
        <a
          className="flex items-center space-x-3 hover:bg-gray-800 text-gray-800 hover:text-white px-4 py-2 rounded-lg"
          href="/saved"
          aria-label="Go to Saved Items"
        >
          <FaBookmark className="text-xl" />
          <span className="font-medium">Saved</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;