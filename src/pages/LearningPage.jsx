import React from "react";
import LearningSide from "../components/learning-side/LearningSide";

export default function LearningPage() {
  return (
    <>
      <LearningSide />
      <section className="w-[50]">
        <h1 className="text-xl font-bold">HTML Tutorial</h1>
        <div>
          <div className="flex justify-between items-center p-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
              <span className="mr-2">&laquo;</span> Home
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center">
              Next <span className="ml-2">&raquo;</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
