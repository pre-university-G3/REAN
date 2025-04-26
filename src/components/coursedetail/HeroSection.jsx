import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import memberdata from "../../data/aboutpagedata/memberdata";
import saveToWatchLater from "../../api/saveToWatchLater";
import IsLogin from "../../auth/IsLogin";

export default function HeroSection(props) {
  const { id, category, title, description, thumbnail, instructor } = props;
  const instructorInfo = memberdata.find((data) => data.name === instructor);
  const [isSaving, setIsSaving] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setAuth(IsLogin());
  }, []);

  const handleSave = async () => {
    if (isAuth) {
      try {
        setIsSaving(true);
        const success = await saveToWatchLater(id);
        if (success) {
          setAlertSuccess(true);
          setTimeout(() => setAlertSuccess(false), 3000);
        } else {
          alert("Failed to save course");
        }
      } catch (e) {
        alert("Error saving course: " + e.message);
        console.error("Save error:", e);
      } finally {
        setIsSaving(false);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="relative w-full min-h-screen h-fit bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 md:py-0 transition-colors duration-500">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-secondary filter blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left Text */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <nav className="flex items-center justify-center md:justify-start space-x-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            <Link
              to="/courses"
              className="hover:text-accent transition-colors duration-300 hover:underline"
            >
              Courses
            </Link>
            <span className="text-accent">/</span>
            <span className="text-black dark:text-white font-medium">
              {category}
            </span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight md:leading-[1.2]">
            {title}
          </h1>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            <div className="flex items-center">
              <div className="relative mr-2">
                <span className="text-gray-300 dark:text-gray-600 text-xl">
                  ★★★★★
                </span>
                <span className="text-yellow-400 text-xl absolute top-0 left-0">
                  ★★★★★
                </span>
              </div>
              <span>5.0 (1.2k reviews)</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-500"></div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>34 Hours</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-500"></div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>15 Lessons</span>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto md:mx-0 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/learning_page")}
              className="relative px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Learning Now
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-500 hover:border-accent text-black dark:text-white font-medium rounded-lg transition-all duration-300 group"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                {isSaving ? "Saving..." : "Save for Later"}
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4 text-gray-500 dark:text-gray-400 text-sm">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>With Good Instructor</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-500"></div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Full Free Learning Course</span>
            </div>
          </div>
        </div>

        {/* Right Thumbnail */}
        <div className="flex-1 max-w-2xl relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-2 border-gray-300 dark:border-gray-700">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Floating Instructor Card */}
          <div className="absolute -bottom-6 -left-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl p-4 flex items-center w-64 border border-gray-300 dark:border-gray-700">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-accent">
              <img
                src={instructorInfo?.avatar}
                alt="Instructor"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Instructor
              </p>
              <p className="font-medium text-black dark:text-white">
                {instructor}
              </p>
              <div className="flex mt-1">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-gray-500 text-xs ml-1">(4.9)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {alertSuccess && (
        <div
          className="absolute z-50 top-20 right-8 abmax-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
          role="alert"
          tabindex="-1"
          aria-labelledby="hs-toast-success-example-label"
        >
          <div className="flex p-4">
            <div className="shrink-0">
              <svg
                class="shrink-0 size-4 text-teal-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
              </svg>
            </div>
            <div className="ms-3">
              <p
                id="hs-toast-success-example-label"
                className="text-sm text-gray-700 dark:text-neutral-400"
              >
                Success! The course was saved.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
