import React from 'react'

export default function Content({ children }) {
    return (
      <main className="flex-1 p-6 ml-0 lg:ml-64 mt-16">
        {children || (
          <div>
            <h1 className="text-2xl font-bold">HTML Tutorial</h1>
            <div className="bg-green-100 p-4 rounded-md mt-4">
              <h2 className="text-xl font-semibold">Learn HTML</h2>
              <p>HTML is the standard markup language for Web pages.</p>
              <p>With HTML, you can create your own website.</p>
              <p>HTML is easy to learn – You will enjoy it!</p>
              <button className="mt-3 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                Start learning HTML now »
              </button>
            </div>
          </div>
        )}
      </main>
    );
  }
