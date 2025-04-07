import React from "react";
import { Link } from "react-router-dom";

export default function Content({ children }) {
  return (
    <main className="flex-1 p-4 sm:p-6 ml-0 lg:ml-64 mt-16">
      {children || (
        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Hero Section - Responsive */}
          <section className="bg-[#2c3e50] text-white p-4 sm:p-6 md:p-8 rounded-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                  HTML Tutorial
                </h1>
                <div className="space-y-2 md:space-y-3">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    Learn HTML
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg">
                    HTML is the standard markup language for Web pages.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg">
                    With HTML, you can create your own website.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg">
                    HTML is easy to learn – You will enjoy it!
                  </p>
                </div>
              </div>
              <Link
                to="/introduction"
                className="mt-3 inline-block bg-[#16a085] hover:bg-green-500 text-white text-sm sm:text-base md:text-lg py-2 px-4 md:py-3 md:px-6 rounded-md transition-colors text-center md:self-end"
              >
                Start learning HTML now »
              </Link>
            </div>
          </section>

          <hr className="border-t border-gray-200" />

          {/* Try it Yourself Section - Responsive */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#2c3e50] p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                Easy Learning with HTML "Try it Yourself"
              </h2>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <div className="space-y-4 md:space-y-6">
                <h3 className="font-semibold text-md sm:text-lg md:text-xl">
                  Example
                </h3>

                <div className="bg-[#2c3e50] rounded-md overflow-hidden">
                  <pre className="p-3 sm:p-4 md:p-5 text-[#16a085] text-xs sm:text-sm md:text-base overflow-x-auto">
                    <code>
                      {`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* YouTube Video Section - Responsive */}
          <section className="bg-[#2c3e50] rounded-lg overflow-hidden shadow-md">
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
                Learn HTML fundamentals in this comprehensive 9 mintues tutorial
                with Bro Code.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">
                  Beginner
                </span>
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs sm:text-sm md:text-base">
                  9 Mintues
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
              className="bg-[#16a085] hover:bg-green-500 text-white text-sm sm:text-base md:text-lg py-2 px-6 md:py-3 md:px-8 rounded-md transition-colors"
            >
              Next: HTML Introduction »
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
