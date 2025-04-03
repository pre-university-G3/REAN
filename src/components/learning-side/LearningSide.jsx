import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
    handleResize(); // Set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sidebar menu items data
  const menuItems = [
    { path: "/", name: "HTML HOME", isActive: true },
    { path: "/introduction", name: "HTML Introduction" },
    { path: "/editors", name: "HTML Editors" },
    { path: "/basic", name: "HTML Basic" },
    { path: "/elements", name: "HTML Elements" },
    // Add more items as needed
  ];

  return (
    <>
      {/* Sidebar - Desktop */}
      <aside 
        className={`fixed top-16 bottom-0 left-0 w-64 bg-white border-r border-gray-200 overflow-y-auto transition-all duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4 text-gray-800">HTML Tutorial</h2>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  className={`block p-2 rounded-md ${
                    item.isActive 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  to={item.path}
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
          className="fixed bottom-4 left-4 lg:hidden p-3 bg-green-600 text-white rounded-full shadow-lg z-50"
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