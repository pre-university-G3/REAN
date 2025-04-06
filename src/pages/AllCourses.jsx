import CategoryCard from "../components/card/CategoryCard.jsx";
import CourseCard from "../components/card/CourseCard.jsx";
import AllCourseData from "../data/allCourses/AllCourses.js";
import CategoryData from "../data/allCourses/Category.js";
import PopularCourseData from "../data/allCourses/PopularCourses.js";

export function AllCourses() {
  return (
    <>
      <main className="bg-white dark:bg-dark-bg">
        {/* Hero Section */}
        <section className="w-full bg-gray-200 dark:bg-black/10 h-[400px] md:h-[500px] relative overflow-hidden flex flex-col items-center justify-center px-4">
          <div className="text-center flex flex-col items-center gap-y-4 max-w-4xl mx-auto">
            <h1 className="text-primary dark:text-dark-primary text-h1-small md:text-h1-medium lg:text-h1-large font-bold">
              Discover Your Next Learning Adventure
            </h1>

            <div className="absolute top-10 left-1/6 w-6 h-6 bg-accent-light dark:bg-accent-light rounded-full"></div>
            <div className="absolute top-40 right-1/8 w-4 h-4 bg-secondary-light dark:bg-secondary-light rounded-full"></div>
            <div className="absolute bottom-30 left-1/4 w-4 h-4 bg-secondary-light dark:bg-secondary-light rounded-full"></div>
            <img
              className="absolute top-32 left-1/10 w-8 h-8"
              src="/images/light.svg"
              alt="decoration"
            />
            <img
              className="absolute top-12 right-1/6 w-8 h-8"
              src="/images/ufo.svg"
              alt="decoration"
            />

            <p className="text-primary/70 dark:text-dark-primary/70 text-detail-small md:text-detail-medium lg:text-detail-large mx-auto">
              Unlock a world of knowledge with our expert-led IT courses.
              Whether <br /> you're a beginner or an experienced professional,
              we have something for everyone. Start learning today!
            </p>

            <div className="w-164 max-w-4xl h-12 px-4 bg-white dark:bg-black rounded-md flex justify-between items-center shadow-sm">
              <input
                className="text-sm sm:text-base focus:outline-none w-full h-full dark:bg-black dark:text-gray-100"
                type="search"
                placeholder="Search courses..."
              />
              <i className="text-sm sm:text-base fa-solid fa-magnifying-glass text-gray-500 dark:text-gray-400"></i>
            </div>
          </div>
        </section>

        {/* Category Section */}
        <section className="px-4 sm:px-5 md:px-15 lg:px-30 py-8">
          <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hidden">
            {CategoryData.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={category.icon}
              />
            ))}
          </div>
        </section>

        {/* Popular Courses Section */}
        <section className="px-5 md:px-[60px] lg:px-[120px] py-8">
          <h2 className="text-2xl md:text-3xl text-primary-light dark:text-gray-100 font-bold mb-6">
            Popular Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PopularCourseData.map((course) => (
              <CourseCard
                key={course.id}
                avatar={course.avatar}
                title={course.title}
                subtitle={course.subtitle}
                icon={course.icon}
                lesson={course.lesson}
                time={course.time}
                description={course.description}
              />
            ))}
          </div>
        </section>

        {/* All Courses Section */}
        <section className="px-5 md:px-[60px] lg:px-[120px] py-8">
          <h2 className="text-2xl md:text-3xl text-primary-light dark:text-gray-100 font-bold mb-6">
            All Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {AllCourseData.map((course) => (
              <CourseCard
                key={course.id}
                avatar={course.avatar}
                title={course.title}
                subtitle={course.subtitle}
                icon={course.icon}
                lesson={course.lesson}
                time={course.time}
                description={course.description}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
