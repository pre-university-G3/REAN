import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import getAllCourses from "../../api/getAllCourses";
import getSavedCourses from "../../api/getSavedCourses";
import deleteFromWatchLater from "../../api/deleteFromWatchLater";

import CourseCard from "../card/CourseCard";

export default function UserEnroll() {
  const [searchTerm, setSearchTerm] = useState("");
  const [savedCourses, setSavedCourses] = useState([]);
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [isDeleting, setIsDeleting] = useState({ status: false, id: 0 });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getAllCourses();
      if (data?.content) {
        setRecommendedCourses(data.content.slice(0, 4));
      }
    };

    const fetchSavedCourses = async () => {
      try {
        const response = await getSavedCourses();
        if (response) setSavedCourses(response);
      } catch (e) {
        alert("Error fetching saved courses: " + e.message);
      }
    };

    fetchCourses();
    fetchSavedCourses();
  }, []);

  const handleDeleteClick = async (courseId) => {
    setIsDeleting({ status: true, id: courseId });
    try {
      await deleteFromWatchLater(courseId);
      setSavedCourses((prev) =>
        prev.filter((course) => course.courseId !== courseId)
      );
      setIsDeleting({ status: false, id: 0 });
    } catch (e) {
      console.log("Error in deleting saved course : " + e.message);
    }
  };

  const handleCourseClick = (slugOrId) => {
    navigate(`/coursedetail/${slugOrId}`);
  };

  const filteredCourses = savedCourses?.filter((course) =>
    course?.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="h-full w-full flex flex-col space-y-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-primary dark:text-dark-primary">
          Saved Courses
        </h2>

        {/* Search Bar */}
        <div className="flex w-[40%] items-center gap-2">
          <input
            type="text"
            placeholder="Search by title..."
            className="border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-gray-500 dark:focus:border-gray-400 rounded-lg py-2 pl-4 pr-2 w-full dark:bg-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 text-white flex justify-center items-center w-10 h-10 rounded-lg hover:bg-blue-600 transition">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Saved Courses Table */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr className="text-gray-600 dark:text-gray-300 text-left text-xs font-medium uppercase tracking-wider">
                <th className="px-6 py-3">Course Title</th>
                <th className="px-6 py-3">Instructor</th>
                <th className="px-6 py-3">Added At</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {filteredCourses?.length > 0 ? (
                filteredCourses.map((course) => (
                  <tr
                    key={course?.courseId}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 cursor-pointer"
                  >
                    <td
                      onClick={() => handleCourseClick(course?.courseId)}
                      className="px-6 py-4 text-sm text-gray-700 dark:text-gray-100"
                    >
                      {course?.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {course?.instructor}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {new Date(course?.addedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeleteClick(course?.courseId)}
                        className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded transition"
                      >
                        {isDeleting.status && isDeleting.id === course?.courseId
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                  >
                    No saved courses.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-primary dark:text-dark-primary mb-6">
          Recommended Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommendedCourses.map((course) => (
            <CourseCard
              key={course?.id}
              id={course?.id}
              onClick={handleCourseClick}
              thumbnail={course?.thumbnail}
              title={course?.title}
              subtitle={course?.subtitle}
              instructor={course?.instructorUsername}
              description={course?.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
