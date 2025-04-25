import React, { useEffect, useState } from "react";
import getAllCourses from "../../api/getAllCourses";
import Loader from "../loading/Loader";
import disableCourse from "../../api/disbleCourse";

export default function EnabledCoursesTable() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [disableId, setDisableId] = useState(null);

  const handleDeleteCourse = async (id) => {
    try {
      setDeleteId(id);
      await deleteCourse(id);
      // Remove the deleted course from both states
      setCourses((prev) => prev.filter((course) => course.id !== id));
    } catch (e) {
      console.log("Error while deleting: " + e);
    } finally {
      setDeleteId(null);
    }
  };
  const handleDisableCourse = async (id) => {
    try {
      setDisableId(id);
      await disableCourse(id);
      setCourses((prev) => prev.filter((course) => course.id !== id));
    } catch (e) {
      console.log("Error while disable: " + e);
    } finally {
      setDisableId(null);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const coursesData = await getAllCourses();

        setCourses(coursesData?.content || []);
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <main className="h-full w-full flex justify-center items-center z-50">
        <Loader />
      </main>
    );
  }
  return (
    <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
      <thead>
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            No.
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Name
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Instructor
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Category
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Last Update
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
        {courses.map((value, index) => (
          <tr class="hover:bg-gray-100 dark:hover:bg-neutral-700">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              {index + 1}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
              {value.title}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
              {value.instructorUsername}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
              {value.categoryName}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
              {new Date(value.updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "2-digit",
              })}
            </td>
            <td class="px-6 py-4 flex gap-4 whitespace-nowrap text-end text-sm font-medium">
              <button
                onClick={() => handleDisableCourse(value.id)}
                disabled={disableId === value.id}
                type="button"
                class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-amber-800 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
              >
                {disableId === value.id ? "Disable..." : "Disable"}
              </button>
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
