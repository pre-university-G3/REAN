import React from "react";
import { Link } from "react-router-dom";

export default function Content({ children }) {
  return (
    <main className="flex-1 p-4 sm:p-6 ml-0 lg:ml-64 mt-16">
      {children || (
        <div className="space-y-6">
          {/* Hero Section */}
          <section className="bg-primary text-white p-4 sm:p-6 rounded-md">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">HTML Tutorial</h1>
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">Learn HTML</h2>
              <p className="text-sm sm:text-base">
                HTML is the standard markup language for Web pages.
              </p>
              <p className="text-sm sm:text-base">
                With HTML, you can create your own website.
              </p>
              <p className="text-sm sm:text-base">
                HTML is easy to learn – You will enjoy it!
              </p>
              <Link
                to="/introduction"
                className="mt-3 inline-block bg-accent hover:bg-green-500 text-white text-sm sm:text-base py-2 px-4 rounded-md transition-colors"
              >
                Start learning HTML now »
              </Link>
            </div>
          </section>

          {/* Divider Line */}
          <hr className="border-t border-gray-200" />

          {/* Try it Yourself Section */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Easy Learning with HTML "Try it Yourself"
              </h2>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-gray-700">
                  With our "Try it Yourself" editor, you can edit the HTML code and view the result:
                </p>
                
                <h3 className="font-semibold text-md sm:text-lg">Example</h3>

                {/* Responsive Code Block */}
                <div className="bg-primary rounded-md overflow-hidden">
                  <pre className="p-3 sm:p-4 text-accent text-xs sm:text-sm overflow-x-auto">
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

                {/* Try it Yourself Button */}
                <div className="flex justify-center pt-2">
                  <button className="bg-accent hover:bg-green-500 text-white font-medium text-sm sm:text-base py-2 px-6 rounded-md transition-colors w-full sm:w-auto">
                    Try it Yourself »
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}