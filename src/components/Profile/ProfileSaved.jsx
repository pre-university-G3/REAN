import React from 'react';
import { FaUser, FaBookOpen, FaBookmark } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function ProfileSaved() {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-6 flex flex-col fixed">
      <div className="flex items-center space-x-2 mb-10">
        <div className="text-3xl font-bold">🎓</div>
        <span className="text-xl font-semibold text-gray-800">Rean</span>
      </div>

      <nav className="flex flex-col space-y-4">
        <Link className="flex items-center space-x-3 hover:bg-gray-800 text-gray-800 hover:text-white px-4 py-2 rounded-lg" to="/profile">
          <FaUser className="text-xl" />
          <span className="font-medium">PROFILE</span>
        </Link>

        <Link className="flex items-center space-x-3 hover:bg-gray-800 text-gray-800 hover:text-white px-4 py-2 rounded-lg" to="/courses">
          <FaBookOpen className="text-xl" />
          <span className="font-medium">COURSES</span>
        </Link>

        <Link className="flex items-center space-x-3 hover:bg-gray-800 text-gray-800 hover:text-white px-4 py-2 rounded-lg" to="/saved">
          <FaBookmark className="text-xl" />
          <span className="font-medium">SAVED</span>  
        </Link>
      </nav>
    </div>
  );
}


// const ProfileSaved = () => {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         {/* <DashboardContent /> */}
//       </div>
//     </Router>
//   );
// };

export default ProfileSaved;
