import React, { useEffect, useState } from "react";
import getAllCourses from "../../api/getAllCourses";
import Loader from "../loading/Loader";
import getPrivateCourses from "../../api/getPrivateCourses";
import deleteCourse from "../../api/deleteCourse";

export default function AllCoursesTable() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [privateCourses, setPrivateCourses] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteCourse = async (id) => {
    try {
      setDeleteId(id);
      await deleteCourse(id);
      // Remove the deleted course from both states
      setCourses((prev) => prev.filter((course) => course.id !== id));
      setPrivateCourses((prev) => prev.filter((course) => course.id !== id));
    } catch (e) {
      console.log("Error while deleting: " + e);
    } finally {
      setDeleteId(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [publicCourses, privateCourses] = await Promise.all([
          getAllCourses(),
          getPrivateCourses(),
        ]);

        setCourses(publicCourses?.content || []);
        setPrivateCourses(privateCourses?.content || []);
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Combine courses for display
  const allCourses = [...courses, ...privateCourses];
  const sortedCourses = [...allCourses].sort(
    (a, b) => a.updatedAt > b.updatedAt
  );

  if (loading) {
    return (
      <main className="h-full w-full flex justify-center items-center z-50">
        <Loader className="animate-spin" />
      </main>
    );
  }

  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead>
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            No.
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Instructor
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Category
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Status
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Last Update
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
        {sortedCourses.map((value, index) => (
          <tr
            key={value.id}
            className="hover:bg-gray-100 dark:hover:bg-neutral-700"
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              {index + 1}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              {value.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
              {value.instructorUsername}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
              {value.categoryName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
              {value.isDrafted ? "Private" : "Public"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
              {new Date(value.updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "2-digit",
              })}
            </td>
            <td className="px-6 py-4 flex gap-4 whitespace-nowrap text-end text-sm font-medium">
              <button
                onClick={() => handleDeleteCourse(value.id)}
                disabled={deleteId === value.id}
                type="button"
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
              >
                {deleteId === value.id ? "Deleting..." : "Delete"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
