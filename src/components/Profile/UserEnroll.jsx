import React from "react";
import { FaBookmark } from "react-icons/fa";
import { useState } from "react";
import { Search } from "lucide-react";
import { FiSun, FiMoon } from "react-icons/fi";
export default function UserEnroll() {
  const coursesInProgress = [
    {
      name: "Web design",
      lessons: 12,
      start: "March 27",
      rate: 4.8,
      level: "Elementary",
      icon: "https://cdn.pixabay.com/photo/2018/09/05/10/12/domain-3655918_1280.png",
    },
    {
      name: "Mobile Development",
      lessons: 10,
      start: "June 17",
      rate: 4.9,
      level: "Intermediate",
      icon: "https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307_1280.png",
    },
    {
      name: "UI/UX design",
      lessons: 7,
      start: "August 05",
      rate: 4.8,
      level: "Elementary",
      icon: "https://cdn.pixabay.com/photo/2022/05/27/11/18/ux-design-7224948_1280.png",
    },
    {
      name: "Networking",
      lessons: 10,
      start: "October 12",
      rate: 4.6,
      level: "Intermediate",
      icon: "https://cdn.pixabay.com/photo/2021/02/08/10/46/world-5994330_1280.png",
    },
    {
      name: "Cloud Computing",
      lessons: 10,
      start: "October 30",
      rate: 4.5,
      level: "Elementary",
      icon: "https://media.istockphoto.com/id/470267100/vector/cloud-symbol.jpg?s=2048x2048&w=is&k=20&c=KcT6uEQmSVdRkRZl_zROHC0X0wjMCKsXU0bG5XVjcuU=",
    },
    {
      name: "Cyber Security",
      lessons: 12,
      start: "December 27",
      rate: 4.8,
      level: "Elementary",
      icon: "https://cdn.pixabay.com/photo/2014/04/03/00/32/padlock-308589_1280.png",
    },
    {
      name: "Database System",
      lessons: 15,
      start: "December 28",
      rate: 4.7,
      level: "Intermediate",
      icon: "https://media.istockphoto.com/id/1783729778/vector/database-and-server-icon-concept.jpg?s=2048x2048&w=is&k=20&c=HUGnquJm4MFVfw-QMlv-AvdRtG8srB0tCiikn5ldXnc=",
    },
  ];

  const recommendedCourses = [
    {
      title: "Cloud Computing",
      description: "Access, Store, and Manage Data",
      lessons: 12,
      hours: 34,
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
    },
    {
      title: "Cloud Computing",
      description: "Access, Store, and Manage Data",
      lessons: 12,
      hours: 34,
      image:
        "https://media.istockphoto.com/id/1421646169/vector/software-development-ide-flat-design.jpg?s=2048x2048&w=is&k=20&c=f5DDKRDi6pCAUANn0KowHnjZyTiMU9jQELQaUnSLi50=",
    },
    {
      title: "Cloud Computing",
      description: "Access, Store, and Manage Data",
      lessons: 12,
      hours: 34,
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png",
    },
  ];
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className="p-6 w-full flex flex-col">
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
              <button className="mt-2 w-full bg-green-500 text-white py-1 rounded flex items-center justify-center gap-2">
                <FaBookmark size={16} /> Save
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
