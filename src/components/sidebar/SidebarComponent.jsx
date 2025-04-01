import React from 'react';
import { FaUser, FaBookOpen, FaBookmark } from 'react-icons/fa'; // Import icons

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-6 flex flex-col">
      <div className="flex items-center space-x-2 mb-10">
        <div className="text-3xl font-bold">🎓</div>
        <span className="text-xl font-semibold text-gray-800">Rean</span>
      </div>

      <nav className="flex flex-col space-y-4">
        {/* Profile Button */}
        <a  className="flex items-center space-x-3 hover:bg-gray-800 text-gray-800 hover:text-white px-4 py-2 rounded-lg" href="/profile">
          <FaUser className="text-xl" />
          <span className="font-medium">PROFILE</span>
        </a>

        {/* Courses Button */}
        <a className="flex items-center space-x-3 hover:bg-gray-800 text-gray-800 hover:text-white px-4 py-2 rounded-lg" href="/courses">
          <FaBookOpen className="text-xl" />
          <span className="font-medium">COURSES</span>
        </a>

        {/* Saved Button */}
        <a className="flex items-center space-x-3 hover:bg-gray-800 text-gray-800 hover:text-white px-4 py-2 rounded-lg" href="/saved">
          <FaBookmark className="text-xl" />
          <span className="font-medium font-kh">SAVED</span>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;