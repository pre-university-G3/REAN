import React, { useEffect, useState } from "react";
import IsLogin from "../../auth/IsLogin";
import saveToWatchLater from "../../api/saveToWatchLater";
import { useNavigate } from "react-router-dom";

export default function CourseCard(props) {
  const { id, thumbnail, title, subtitle, description, instructor, onClick } =
    props;
  const [isAuth, setAuth] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(IsLogin);
  }, []);
  const courseId = id;
  const handleCourseClick = () => {
    if (onClick) {
      onClick(courseId);
    }
  };

  const handleClick = async () => {
    if (isAuth) {
      try {
        setIsSaving(true); // Add loading state if needed
        await saveToWatchLater(id);
      } catch (e) {
        console.error("Save error:", e);
      } finally {
        setIsSaving(false); // Reset loading state
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className={`flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[450px] cursor-pointer 
        bg-white dark:bg-gray-800
        ${isHovered ? "transform scale-105" : "transform scale-100"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with hover effect */}
      <div
        onClick={handleCourseClick}
        className="relative h-[50%] overflow-hidden"
      >
        <img
          className={`w-full h-full object-cover transition-transform duration-500`}
          src={thumbnail}
          alt={title}
        />
        {/* Premium badge */}
        <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 text-primary dark:text-dark-primary font-bold px-3 py-1 rounded-full text-xs shadow-md">
          Free
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex-grow">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-1 mb-1">
              {title}
            </h3>
            <p className="text-accent dark:text-dark-accent font-medium">
              {subtitle}
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
            {description}
          </p>
        </div>

        {/* Instructor and action */}
        <div className="mt-auto">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Instructor
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {instructor}
              </span>
            </div>
          </div>

          <button
            onClick={handleClick}
            disabled={isSaving}
            className={`w-full z-50 mt-4 py-2 rounded-md font-medium text-white transition-colors duration-300 ${
              isHovered
                ? "bg-dark-accent dark:bg-dark-accent/70"
                : "bg-accent dark:bg-dark-accent"
            }`}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
