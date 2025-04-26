import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../sideBar";
import HeaderComponent from "../../header/HeaderComponent";

export default function VideoLayout({ children }) {
  const videoSectionRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved preference or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Header at the top */}
      <header>
        <HeaderComponent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>

      {/* Main content area with sidebar and content */}
      <main className="flex flex-1">
        <div className="flex flex-1">
          {/* Sidebar on mobile */}
          <section>
            <Sidebar darkMode={darkMode} />
          </section>

          {/* Main content area */}
          <div className="flex-1 p-4 sm:p-6 ml-0 lg:ml-64 mt-16">
            {children || (
              <div className="space-y-6 max-w-6xl mx-auto">
                {/* YouTube Video Section - Responsive */}
                <section
                  ref={videoSectionRef}
                  className="bg-[#2c3e50] dark:bg-gray-800 rounded-lg overflow-hidden shadow-md scroll-mt-16"
                >
                  <div className="relative w-full aspect-video">
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                      <iframe
                        src="https://www.youtube.com/embed/aRGdDy18qfY?si=UTKJyqc9s0gO6iCB"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="HTML Tutorial"
                      ></iframe>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">
                      HTML Crash Course For Absolute Beginners
                    </h2>
                    <p className="text-white mb-4 text-sm sm:text-base md:text-lg">
                      Learn HTML Iframe in 3 minutes with Bro Code.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">
                        Beginner
                      </span>
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">
                        3 Minutes
                      </span>
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">
                        HTML5
                      </span>
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">
                        Bro Code
                      </span>
                    </div>
                  </div>
                </section>

                {/* Next Button Section */}
                <div className="flex justify-between  pt-6">
                  <Link
                    to="/html_meta_tag"
                    className="bg-accent dark:bg-green-700 hover:bg-green-500 dark:hover:bg-green-600 text-white text-sm sm:text-base md:text-lg py-2 px-6 md:py-3 md:px-8 rounded-md transition-colors"
                  >
                    « Back: Meta Tag
                  </Link>

                  <Link
                    to="/html_button"
                    className="bg-accent hover:bg-green-500 text-white text-sm sm:text-base md:text-lg py-2 px-6 md:py-3 md:px-8 rounded-md transition-colors"
                  >
                    Next: HTML Button »
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
