import React from "react";
import { useNavigate } from "react-router-dom";
import Course from "./Course";
import popularCourses from "../../../data/popularCourses";

const courses = popularCourses;

export default function PopularCourses() {
  const navigate = useNavigate();
  const handleCourseClick = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <section className="w-full flex flex-col space-y-10 px-5 md:px-[60px] lg:px-[120px]">
      <article className="flex justify-between items-center">
        <h2 className="text-h2-small md:text-h2-medium lg:text-h2-large text-primary font-bold text-start">
          Popular Courses
        </h2>
        <button
          className="relative flex lg:hidden z-10 text-accent underline text-detail-large"
          onClick={() => navigate("/courses")}
        >
          View all courses
        </button>
      </article>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
        {courses.map((course) => (
          <Course
            key={course.id}
            id={course.id}
            // onClick={() => navigate(`/courses/${course.id}`)}
            category={course.category}
            title={course.title}
            lessons={course.lessons}
            time={course.time}
            src={course.src}
            onClick={handleCourseClick} // Pass the click handler to each course
          />
        ))}
      </section>
      <button
        className="hidden lg:flex mx-auto justify-center items-center px-6 py-3  w-fit bg-accent text-white hover:bg-[#0b6957] hover:text-white rounded-small transition-colors ease-in-out duration-300"
        onClick={() => navigate("/courses")}
      >
        View all Courses
      </button>
    </section>
  );
}
