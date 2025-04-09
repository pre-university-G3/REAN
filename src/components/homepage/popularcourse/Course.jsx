import React from "react";
import PropTypes from "prop-types";
import { SlUserFollowing } from "react-icons/sl";
import { FiArrowRight } from "react-icons/fi";

const Course = ({ slug, category, title, instructor, thumbnail, onClick }) => {
  const handleClick = () => {
    onClick?.(slug);
  };

  return (
    <article
      onClick={handleClick}
      className="group relative flex flex-col p-5 gap-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-4 hover:border-accent/20 dark:hover:border-transparent shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1"
      role="button"
      tabIndex={0}
      aria-label={`View course: ${title}`}
    >
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${thumbnail})` }}
          aria-hidden="true"
        />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full bg-accent text-white dark:bg-dark-accent shadow-sm z-10">
          {category}
        </span>
      </div>

      <div className="flex flex-col gap-3 z-20">
        {/* Title with hover effect */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-accent dark:group-hover:text-dark-accent transition-colors">
          {title}
        </h3>

        {/* Instructor Info */}
        <div className="flex justify-between items-center text-sm">
          <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <SlUserFollowing
              size={14}
              className="text-accent dark:text-dark-accent"
            />
            Instructor
          </span>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {instructor}
          </span>
        </div>
      </div>
      <div className="absolute -inset-1 rounded-xl bg-accent/5 dark:bg-dark-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </article>
  );
};

Course.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Course.defaultProps = {
  onClick: undefined,
};

export default Course;
