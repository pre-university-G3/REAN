import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import images1 from "../../../public/img/image.png";
import { FaBookOpen, FaBookmark, FaUser } from "react-icons/fa";
function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} ${
          darkMode ? "bg-gray-800" : "bg-white"
        } transition-all duration-300 border-r ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">Dashboard</h1>
          ) : (
            <h1 className="text-xl font-bold">D</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-700 "
          >
            {sidebarOpen ? "◀" : "▶"}
          </button>
        </div>
        <nav className="mt-6">
          <NavLink
            to="/profile"
            icon={<FaUser />}
            text="PROFILE"
            sidebarOpen={sidebarOpen}
            darkMode={darkMode}
          />
          <NavLink
            to="/my-course"
            icon={<FaBookOpen />}
            text="MY COURSE"
            sidebarOpen={sidebarOpen}
            darkMode={darkMode}
          />
          <NavLink
            to="/saved"
            icon={<FaBookmark />}
            text="SAVED"
            sidebarOpen={sidebarOpen}
            darkMode={darkMode}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Overview</h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </header>

        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/my-course" element={<MyCoursePage />} />
          <Route path="/saved" element={<SavedPage />} />
        </Routes>
      </div>
    </div>
  );
}

// Improved NavLink Component (with hover + active states)
function NavLink({ to, icon, text, sidebarOpen, darkMode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center p-4 mb-2 rounded-lg transition-colors duration-200 ${
        isActive
          ? "bg-gray-800 dark:bg-gray-900 text-white"
          : `${
              darkMode
                ? "hover:bg-gray-800 dark:hover:bg-gray-900 hover:text-white"
                : "hover:bg-gray-800 hover:text-white"
            }`
      }`}
    >
      <span className="text-xl">{icon}</span>
      {sidebarOpen && <span className="ml-3">{text}</span>}
    </Link>
  );
}

// Placeholder Pages
function ProfilePage() {
  return <h2>Profile Page</h2>;
}

function MyCoursePage() {
  return <h2>My Course Page</h2>;
}

function SavedPage() {
  const courses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Johnson",
      thumbnail:
        " https://cdn.pixabay.com/photo/2019/08/10/13/26/website-4396924_1280.jpg",
      progress: 75,
      lastAccessed: "2 days ago",
    },
    {
      id: 2,
      title: "Tailwind CSS Mastery",
      instructor: "Mike Chen",
      thumbnail:
        "https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_1280.jpg",
      progress: 30,
      lastAccessed: "1 week ago",
    },
    {
      id: 3,
      title: "Node.js Backend Fundamentals",
      instructor: "Alex Rodriguez",
      thumbnail:
        "https://cdn.pixabay.com/photo/2024/05/02/09/16/web-development-8734249_1280.png",
      progress: 90,
      lastAccessed: "Yesterday",
    },
  ];

  return (
    <div className="space-y-6 h-[900px]">
      <h2 className="text-2xl font-bold mb-6">Saved Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-800"
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
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">
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
        <footer>
          <div className="items-center w-[1215px] h-60 bg-gray-800 text-white">
            <h2 className="text-center pt-3 ">LOGO</h2>
            <h2 className="text-center pt-5">JOIN OUT DISCOURD COMMUNITY</h2>
            <h4 className="text-center pt-3 pl-68 flex w-[950px]">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt, illum! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nulla sequi doloribus ab quas
              itaque. Et esse magnam vero quae neque?
            </h4>
            <div className="flex justify-center pt-5">
          <button className="bg-accent p-2 rounded-full " onClick>JOIN US</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Dashboard;
