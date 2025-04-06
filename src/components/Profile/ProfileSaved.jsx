import React from "react";
import courses from "../../data/savedCourses";
function ProfileSaved() {
  return (
    <div className="space-y-6 p-10 h-auto">
      <h2 className="text-2xl font-bold mb-6">Saved Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border shadow-small"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-70 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 dark:text-gray-900">
                {course.title}
              </h3>
              <p className="text-gray-200 dark:text-gray-500 text-sm mb-3">
                by {course.instructor}
              </p>

              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1 dark:text-gray-600">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 dark:text-white rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Last accessed: {course.lastAccessed}
                </span>
                <div className="space-x-2">
                  <button className="px-3 py-1 bg-accent text-white rounded-md text-sm hover:bg-blue-600">
                    Continue
                  </button>
                  <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-sm hover:bg-gray-300 dark:hover:bg-gray-600">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <footer className=" relative w-[1215px] bg-gray-900 text-white text-center px-4 py-8">
          <div className="max-w-screen-lg">
            <h3 className="text-lg md:text-xl font-bold">
              JOIN OUR DISCORD COMMUNITY
            </h3>
            <p className="text-sm md:text-base mt-2 leading-relaxed ml-30 ">
              Join thousands of students sharing knowledge and experiences.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              amet, debitis corporis rerum impedit saepe maxime sed vero,
              voluptate quasi error praesentium a dicta consectetur! Illum,
              accusamus deserunt. Aspernatur, voluptatem!
            </p>
            <button className="mt-4 bg-green-500 px-6 py-2 rounded text-white hover:bg-green-600 transition">
              Join us
            </button>
          </div>
        </footer> */}
      </div>
    </div>
  );
}
export default ProfileSaved;
