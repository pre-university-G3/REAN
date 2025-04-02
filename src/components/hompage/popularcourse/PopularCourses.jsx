import React from "react";
import { useNavigate } from "react-router-dom";
import Course from "./Course";
import popularCourses from "../../../data/popularCourses";

const courses = popularCourses;
console.log(courses);

export default function PopularCourses() {
  const navigate = useNavigate(); // Get the navigate function

  return (
    <section className="w-full pt-[50px] sm:pt-[72px] px-5 md:px-[60px] lg:px-[120px]">
      <article className="flex justify-start lg:justify-between items-center">
        <h2 className="text-h2-large text-primary font-bold text-start">
          Popular Courses
        </h2>
        <button
          className="relative z-10 text-accent underline text-detail-large"
          onClick={() => navigate("/courses")}
        >
          View all courses
        </button>
      </article>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px]">
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
          />
        ))}
      </section>
    </section>
  );
}
