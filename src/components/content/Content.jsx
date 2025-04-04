import React from "react";
import { Link } from "react-router-dom";
export default function Content({ children }) {
  return (
    <main className="flex-1 p-6 ml-0 lg:ml-64 mt-16">
      {children || (
        <div>
          <section>
            <h1 className="text-2xl font-bold">HTML Tutorial</h1>
            <div className="bg-accent text-white p-4 rounded-md mt-4">
              <h2 className="text-xl font-semibold">Learn HTML</h2>
              <p>HTML is the standard markup language for Web pages.</p>
              <p>With HTML, you can create your own website.</p>
              <p>HTML is easy to learn – You will enjoy it!</p>
              <Link
                to="/introduction"
                className="mt-3 inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                Start learning HTML now »
              </Link>
            </div>
          </section>

          {/* Divider Line */}
          <hr className="border-t border-gray-200 my-6" />

          {/* Second Section - Try it Yourself */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-accent p-4">
              <h2 className="text-xl font-bold text-white">
                Easy Learning with HTML "Try it Yourself"
              </h2>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-3">Example</h3>

              {/* Code Block */}
              <div className="bg-gray-800 rounded-md overflow-hidden mb-4">
                <pre className="p-4 text-green-400 text-sm overflow-x-auto">
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
              <div className="flex justify-center">
                <div className="bg-green-600 text-white font-bold py-2 px-6 rounded-md transition-colors">
                  Try it Yourself
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
