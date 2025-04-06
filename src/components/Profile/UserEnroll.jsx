import React from "react";
import { FaBookmark } from "react-icons/fa";
import { useState } from "react";
import { Search } from "lucide-react";
import coursesInProgress from "../../data/courseInProgress";
import recommendedCourses from "../../data/recommandCourses";
export default function UserEnroll() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className="p-10 w-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Courses in Progress</h2>

          {/* Search Bar */}
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-4 py-2 pl-10 w-72"
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Search Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Search
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <table className="w-full text-left">
            {/* Table Header */}
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="pb-4 text-sm font-medium uppercase">
                  Course name
                </th>
                <th className="pb-4 text-sm font-medium uppercase">Start</th>
                <th className="pb-4 text-sm font-medium uppercase">Rate</th>
                <th className="pb-4 text-sm font-medium uppercase">Level</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {coursesInProgress.map((course, index) => (
                <tr key={index} className="border-b last:border-none">
                  {/* Course Name with Icon */}
                  <td className="py-4 flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg d">
                      <img
                        src={course.icon}
                        alt={course.name}
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{course.name}</p>
                      <p className="text-sm text-gray-500">
                        {course.lessons} Lessons
                      </p>
                    </div>
                  </td>

                  {/* Start Date */}
                  <td className="py-4 text-gray-700">{course.start}</td>

                  {/* Rate */}
                  <td className="py-4 text-gray-700">{course.rate}</td>

                  {/* Level */}
                  <td className="py-4 text-gray-700">{course.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommended Courses */}
        <div>
          <h2 className="text-2xl font-bold mt-8">Recommended Courses</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {recommendedCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4 ">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded w-full h-40 object-cover"
                />
                <h3 className="mt-2 text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
                <div className="flex justify-between text-sm mt-2">
                  <span>{course.lessons} Lessons</span>
                  <span>{course.hours} Hours</span>
                </div>
                <button className="mt-2 w-full small-button flex gap-2">
                  <FaBookmark size={16} /> Save
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
