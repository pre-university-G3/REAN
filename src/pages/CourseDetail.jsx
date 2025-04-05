import React from "react";
import HeroSection from "../components/coursedetail/HeroSection";
import DropDown from "../components/coursedetail/DropDown";
import AllCourseData from "../data/allCourses/AllCourses";
import CourseCard from "../components/card/CourseCard";

const recommandCourse = AllCourseData.slice(0, 4);

export default function CourseDetail() {
  return (
    <main className="flex flex-col items-center space-y-[96px] pb-24">
      {/* Hero Section */}
      <HeroSection />

      {/* Course Content */}
      <article className="px-4 md:px-30 space-y-[96px]">
        <section className="w-full flex flex-col space-y-10">
          <h1 className="text-accent text-h2-large font-bold">
            Course Content
          </h1>
          <DropDown />
        </section>
        {/* Description */}
        <section className="w-full">
          <h1 className="text-accent text-h2-large font-bold">Description</h1>
          <p className="text-primary text-body-text-large mt-10">
            It would be best to have a basic understanding of HTML and CSS. If
            you still need to learn the fundamentals, we link to some excellent
            resources inside the path. We recommend starting the path and using
            the resources to boost your knowledge before tackling the first
            challenge.
          </p>
        </section>
        {/* All Courses */}
        <section className="w-full flex flex-col space-y-10">
          <div className="flex justify-between items-center">
            <h1 className="text-accent text-h2-large font-bold">All Course</h1>
            <div className="mt-5">
              <nav className="text-gray-500">
                <a href="#" className="hover:text-accent text-body-text-large">
                  View More <span className="mx-3">&gt;</span>
                </a>
              </nav>
            </div>
          </div>
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {recommandCourse.map((data) => (
              <CourseCard
                key={data.id}
                avatar={data.avatar}
                title={data.title}
                subtitle={data.subtitle}
                description={data.description}
                lesson={data.lesson}
                time={data.time}
              />
            ))}
          </section>
        </section>
        {/* Instructor */}
        <section className="w-full">
          <h1 className="text-accent text-h2-large font-bold">Instructor</h1>
          <article className="bg-white rounded-lg shadow-md border p-10 mt-10 border-black">
            <div className="flex flex-col md:flex-row gap-5">
              <figure className="flex-shrink-0">
                <img
                  src="https://img-c.udemycdn.com/user/200_H/12013100_e696_6.jpg"
                  alt=""
                  className="w-[200px] h-[200px] rounded-full object-cover"
                />
              </figure>
              <div className="flex-grow">
                <h1 className="text-h3-large text-primary font-bold mb-3">
                  Joseph Delgadillo
                </h1>
                <p className="text-body-text-large text-primary mt-2">
                  Joseph Delgadillo is the founder of JTD Courses, an education
                  technology company. He has been active in the online learning
                  industry since 2015 and has worked with several prominent
                  companies. As of 2024, over 1 million students across the
                  globe have enrolled in his courses covering network security,
                  Python programming, web development and more.
                </p>
              </div>
            </div>
          </article>
        </section>
      </article>
    </main>
  );
}
