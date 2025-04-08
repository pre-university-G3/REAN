import { useEffect, useState } from "react";
import CategoryCard from "../components/card/CategoryCard.jsx";
import CourseCard from "../components/card/CourseCard.jsx";
import getCategory from "../api/getCategory.js";
import getAllCourses from "../api/getAllCourses.js";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loading/Loader.jsx";
import { motion } from "framer-motion";

export function AllCourses() {
  const [popularCourses, setPopularCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getAllCourses();
      if (data) {
        setCourses(data?.content);
        setPopularCourses(data?.content?.slice(0, 8));
        setLoading(false);
      }
    };

    fetchCourses();
  }, [courses]);

  const handleCategoryClick = (categoryName) => {
    // Filter courses by category
    const filtered = courses.filter(
      (course) => course.categoryName === categoryName
    );
    setPopularCourses(filtered.slice(0, 8));
  };

  const handleCourseClick = (slug) => {
    navigate(`/coursedetail/${slug}`);
  };

  // Fetching the categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getCategory();
        setCategories(data ? data : []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  // if (searchQuery.length > 1) {
  const filteredCourses = courses?.filter(
    (course) =>
      course?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course?.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //   setListCourses(filteredCourses);
  // } else {
  //   setListCourses(courses);
  // }

  // const filteredPopularCourses = popularCourses?.filter(
  //   (course) =>
  //     course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     course.description.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  if (loading) {
    return (
      <main className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-white to-gray-50">
        <Loader />
      </main>
    );
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-gradient-to-br from-white to-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary/10 to-secondary/10 h-[400px] md:h-[500px] relative overflow-hidden flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/6 w-6 h-6 bg-accent-light rounded-full animate-float"></div>
          <div className="absolute top-40 right-1/8 w-4 h-4 bg-secondary-light rounded-full animate-float-delay"></div>
          <div className="absolute bottom-30 left-1/4 w-4 h-4 bg-secondary-light rounded-full animate-float-delay-2"></div>
          <img
            className="absolute top-32 left-1/10 w-8 h-8 animate-pulse"
            src="/images/light.svg"
            alt="decoration"
          />
          <img
            className="absolute top-12 right-1/6 w-8 h-8 animate-float"
            src="/images/ufo.svg"
            alt="decoration"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center gap-y-4 max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Discover Your Next{" "}
            <span className="text-accent">Learning Adventure</span>
          </h1>

          <p className="text-primary/50 text-lg md:text-xl max-w-2xl mx-auto">
            Unlock a world of knowledge with our expert-led IT courses. Whether
            you're a beginner or an experienced professional, we have something
            for everyone.
          </p>

          <div className="w-full max-w-2xl h-14 px-6 bg-white rounded-lg flex justify-between items-center shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-accent focus-within:shadow-xl">
            <input
              className="text-base search-input sm:text-lg focus:outline-none w-full h-full bg-transparent placeholder-gray-400 "
              type="search"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                console.log(searchQuery);
              }}
            />
            <button className="text-gray-500 hover:text-primary transition-colors">
              <i className="fas fa-magnifying-glass text-lg"></i>
            </button>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section
        className={`px-4 sm:px-6 md:px-8 lg:px-12 py-12 ${
          searchQuery ? "hidden" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8"
          >
            Browse by Category
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex overflow-scroll gap-x-2 scrollbar-hidden"
          >
            {categories.map((category, index) => (
              <motion.div key={category.id} variants={item}>
                <CategoryCard
                  title={category?.name}
                  onClick={() => handleCategoryClick(category.name)}
                  icon={category?.icon.replace(
                    "http://localhost:8080/image/",
                    ""
                  )}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section
        className={`px-4 sm:px-6 md:px-8 lg:px-12 py-12 bg-gray-50 ${
          searchQuery ? "hidden" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Popular Courses
            </h2>
            <button className="text-primary hover:text-primary-dark font-medium">
              View All
            </button>
          </motion.div>

          {popularCourses?.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {popularCourses.map((course) => (
                <motion.div key={course?.id} variants={item}>
                  <CourseCard
                    id={course?.id}
                    onClick={handleCourseClick}
                    thumbnail={course?.thumbnail}
                    title={course?.title}
                    subtitle={course.subtitle}
                    instructor={course?.instructorUsername}
                    description={course?.description}
                    rating={course.rating}
                    students={course.enrolledStudents}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-500">
                No courses match your search
              </h3>
            </div>
          )}
        </div>
      </section>

      {/* All Courses Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              All Courses
            </h2>
          </motion.div>

          {filteredCourses?.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
            >
              {filteredCourses?.map((course) => (
                <motion.div
                  key={course?.id}
                  variants={item}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView="show"
                  viewport={true}
                >
                  <CourseCard
                    id={course?.id}
                    onClick={handleCourseClick}
                    thumbnail={course?.thumbnail}
                    title={course?.title}
                    subtitle={course.subtitle}
                    instructor={course?.instructorUsername}
                    description={course?.description}
                    rating={course.rating}
                    students={course.enrolledStudents}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-500">
                No courses match your search
              </h3>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
