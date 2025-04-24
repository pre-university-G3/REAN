import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Content({ children }) {
  const videoSectionRef = useRef(null);

  const scrollToVideo = () => {
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex-1 p-4 sm:p-6 ml-0 lg:ml-64 mt-16">
      {children || (
        <div className="space-y-6 max-w-6xl mx-auto">

          {/* YouTube Video Section - Responsive */}
          <section 
            ref={videoSectionRef} 
            className="bg-[#2c3e50] rounded-lg overflow-hidden shadow-md scroll-mt-16"
          >
            <div className="relative w-full aspect-video">
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <iframe
                  src="https://www.youtube.com/embed/-CNdRywgF7M?list=PLZPZq0r_RZOPoNttk9beDhO_Bu5DA-xwP"
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
                Learn HTML fundamentals in this comprehensive 9 minutes tutorial
                with Bro Code.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">
                  Beginner
                </span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">
                  9 Minutes
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
          <div className="flex justify-center pt-6">
            <Link
              to="/introduction"
              className="bg-accent hover:bg-green-500 text-white text-sm sm:text-base md:text-lg py-2 px-6 md:py-3 md:px-8 rounded-md transition-colors"
            >
              Next: HTML Introduction »
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}