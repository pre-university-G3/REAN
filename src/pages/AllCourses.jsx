import { useEffect, useState } from "react";
import CategoryCard from "../components/card/CategoryCard.jsx";
import CourseCard from "../components/card/CourseCard.jsx";
import getCategory from "../api/getCategory.js";
import getAllCourses from "../api/getAllCourses.js";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/loading/Loader.jsx";
import { motion } from "framer-motion";
import { Button } from "@headlessui/react";

export function AllCourses() {
  const [popularCourses, setPopularCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
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
  }, []);

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      // If clicking the same category, unselect it
      setSelectedCategory(null);
      setPopularCourses(courses.slice(0, 8));
    } else {
      // Select new category
      setSelectedCategory(categoryName);
      const filtered = courses.filter(
        (course) => course.categoryName === categoryName
      );
      setPopularCourses(filtered);
    }
  };

  const handleCourseClick = (slug) => {
    navigate(`/course/${slug}`);
  };

  // Fetching the categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const data = await getCategory();
      setCategories(data ? data : []);
    };

    fetchCategory();
  }, []);

  const filteredCourses = courses?.filter(
    (course) =>
      course?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course?.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <main className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-white to-gray-50">
        <Loader />
      </main>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="bg-gradient-to-br from-white to-gray-50 dark:from-[#121212] dark:to-[#1e1e1e]">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#2c3e50]/10 to-[#f4c542]/10 dark:from-primary/20 dark:to-[#000000]/20 h-[400px] md:h-[500px] relative overflow-hidden flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-1/6 w-6 h-6 bg-[#16a085] rounded-full animate-float dark:bg-[#1abc9c]"></div>
          <div className="absolute top-40 right-1/8 w-4 h-4 bg-[#f4c542] rounded-full animate-float-delay dark:bg-[#ffd700]"></div>
          <div className="absolute bottom-30 left-1/4 w-4 h-4 bg-[#f4c542] rounded-full animate-float-delay-2 dark:bg-[#ffd700]"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionVariants}
          className="text-center flex flex-col items-center gap-y-4 max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-[#2c3e50] dark:text-[#e0e0e0] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Discover Your Next{" "}
            <span className="text-[#16a085] dark:text-[#1abc9c]">
              Learning Adventure
            </span>
          </h1>

          <p className="text-[#2c3e50]/50 dark:text-[#e0e0e0] text-lg md:text-xl max-w-2xl mx-auto">
            Unlock a world of knowledge with our expert-led IT courses...
          </p>

          <div className="w-full max-w-2xl h-14 px-6 bg-white dark:bg-[#121212] rounded-lg flex justify-between items-center shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-[#16a085] dark:focus-within:ring-[#1abc9c]">
            <input
              className="text-base search-input sm:text-lg focus:outline-none w-full h-full bg-transparent placeholder-[#2c3e50]/40 dark:placeholder-[#e0e0e0]/60 text-[#2c3e50] dark:text-white"
              type="search"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="text-[#2c3e50]/60 dark:text-[#e0e0e0]/60 hover:text-[#16a085] dark:hover:text-[#1abc9c]">
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
            initial="hidden"
            animate="show"
            variants={sectionVariants}
            className="text-2xl md:text-3xl font-bold text-[#2c3e50] dark:text-[#e0e0e0] mb-8"
          >
            Browse by Category
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex overflow-scroll gap-x-2 scrollbar-hidden"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <CategoryCard
                  title={category?.name}
                  onClick={() => handleCategoryClick(category.name)}
                  isSelected={selectedCategory === category.name}
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
        className={`px-4 sm:px-6 md:px-8 lg:px-12 py-12 bg-[#f8f9fa] dark:bg-[#121212] ${
          searchQuery ? "hidden" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={sectionVariants}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {selectedCategory
                ? `${selectedCategory} Courses`
                : "Popular Courses"}
            </h2>
            {!selectedCategory && (
              <Button
                onClick={() => {
                  document.getElementById("all-course").scrollIntoView({
                    block: "start",
                    inline: "center",
                  });
                }}
                className="text-primary dark:text-primary-400 hover:text-primary-dark font-medium cursor-pointer"
              >
                View All
              </Button>
            )}
          </motion.div>

          {popularCourses?.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {popularCourses.map((course) => (
                <motion.div key={course?.id} variants={itemVariants}>
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
            <motion.div
              initial="hidden"
              animate="show"
              variants={sectionVariants}
              className="text-center py-12"
            >
              <h3 className="text-xl text-gray-500">
                No courses found in this category
              </h3>
            </motion.div>
          )}
        </div>
      </section>

      {/* All Courses Section */}
      <section id="all-course" className="px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={sectionVariants}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
              All Courses
            </h2>
          </motion.div>

          {filteredCourses?.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
            >
              {filteredCourses?.map((course) => (
                <motion.div key={course?.id} variants={itemVariants}>
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
            <motion.div
              initial="hidden"
              animate="show"
              variants={sectionVariants}
              className="text-center py-12"
            >
              <h3 className="text-xl text-gray-500">
                No courses match your search
              </h3>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
