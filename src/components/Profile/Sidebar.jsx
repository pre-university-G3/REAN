import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBookOpen, FaBookmark, FaUser, FaHome } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

function NavLink({ to, icon, text, sidebarOpen, className }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center p-3 rounded-lg transition-all duration-200 ${className} ${
        isActive
          ? "bg-gray-800 dark:bg-gray-900 text-white"
          : "hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white"
      } ${sidebarOpen ? "justify-start gap-3" : "justify-center"}`}
    >
      <span className="text-xl">{icon}</span>
      {sidebarOpen && <span className="text-sm font-medium">{text}</span>}
    </Link>
  );
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      setSidebarOpen(isLarge);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger only on small screens */}
      {!isLargeScreen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-md lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <HiMenu className="text-xl text-gray-800 dark:text-white" />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen z-40 border-r border-gray-200 dark:border-gray-700 ${
          sidebarOpen ? "w-64" : "w-0 overflow-hidden"
        } bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 lg:w-64`}
      >
        <div className="flex items-center justify-end lg:justify-start  gap-3 px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <Link className="hidden lg:inline" to={"/"}>
            <IoArrowBack />
          </Link>
          {sidebarOpen && <h1 className="text-lg font-bold">Account</h1>}
        </div>

        <nav className="flex flex-col px-4 py-6 gap-3">
          <NavLink
            to="/profile"
            icon={<FaUser />}
            text="Profile"
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            to="/saved"
            icon={<FaBookmark />}
            text="Saved"
            sidebarOpen={sidebarOpen}
          />
          <NavLink
            className={"flex lg:hidden"}
            to="/"
            icon={<FaHome />}
            text="Home"
            sidebarOpen={sidebarOpen}
          />
        </nav>
      </aside>
    </>
  );
}
