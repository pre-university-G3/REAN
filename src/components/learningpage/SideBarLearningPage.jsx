import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

export default function SideBar({ darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Auto-open sidebar on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sidebar menu items data
  const menuItems = [
    { path: "/learning_page", name: "HTML Introduction" },
    { path: "/html_hyperlinks", name: "HTML Hyperlinks" },
    { path: "/html_audio", name: "HTML Audio" },
    { path: "/html_video", name: "HTML Video" },
    { path: "/html_image", name: "HTML Image" },
    { path: "/html_text_formatting", name: "HTML Text Formatting" },
    { path: "/html_list", name: "HTML Lists" },
    { path: "/html_table", name: "HTML Table" },
    { path: "/html_color", name: "HTML Color" },
    { path: "/html_span_and_div", name: "HTML Span And Div" },
    { path: "/html_meta_tag", name: "HTML Meta Tags" },
    { path: "/html_iframes", name: "HTML Iframes" },
    { path: "/html_button", name: "HTML Button" },
    { path: "/html_form", name: "HTML Form" },
  ];

  return (
    <>
      {/* Sidebar - Desktop */}
      <aside
        className={`fixed top-18 bottom-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto transition-all duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:top-18 lg:mt-0 sm:top-20 md:top-18`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            HTML Tutorial
          </h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  className={`block p-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Sidebar Toggle Button - Mobile */}
      {!isOpen && (
        <button
          className="fixed bottom-4 left-4 lg:hidden p-3 bg-accent text-white rounded-full shadow-lg z-50"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
