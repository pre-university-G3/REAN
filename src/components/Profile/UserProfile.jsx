import { Link, useNavigate } from "react-router-dom";
import image from "../../../public/img/image.png";
import { useEffect, useState } from "react";
import getUser from "../../api/getUser";
import IsLogin from "../../auth/IsLogin";

export default function UserProfile() {
  const defaultValue = {
    id: 0,
    gender: "null",
    biography: "null",
    email: "null",
  };

  const [user, setUser] = useState(defaultValue);
  useEffect(() => {
    const fetchData = async () => {
      if (IsLogin()) {
        const userData = await getUser();
        if (userData) {
          setUser(userData);
        }
      }
    };

    fetchData();
  }, []);
  console.log(user);
  console.dir(user);
  const navigate = useNavigate();
  const ProfileInfo = [
    { label: "Username", value: `${user.biography}` },
    { label: "Role", value: "Student" },
    {
      label: "Gender",
      value: `${user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}`,
    },
    { label: "Email", value: `${user.email}` },
  ];

  return (
    <>
      {/* You had an invalid Link here — removed */}

      <section className="h-full flex flex-col space-y-10 w-full">
        <div className="w-full flex flex-col space-y-8">
          {/* Top Section */}
          <div className="flex flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                className="border-4 border-transparent outline outline-accent rounded-full w-28 h-28"
                src="/img/userprofile.jpg"
                alt="User Profile"
              />
              <div>
                <h2 className="text-h1-small text-primary dark:text-dark-primary font-bold">
                  {user.biography}
                </h2>
                <p className="text-primary/70 dark:text-dark-primary/70">
                  {user.email}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                navigate("/");
              }}
              className="px-4 py-2 text-sm font-semibold text-white rounded-md bg-red-600 hover:bg-red-700"
            >
              Log out
            </button>
          </div>

          {/* Info Section */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
            {/* Profile Info */}
            <div className="bg-white dark:bg-[#1e1e1e] w-full rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                Profile Information
              </h2>
              <div className="space-y-4">
                {ProfileInfo.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      {item.label}
                    </p>
                    <p className="flex items-center px-4 h-[52px] text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-800 rounded-md">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="w-full hidden lg:flex justify-center items-center">
              <img
                className="w-full  object-contain"
                src={image}
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <footer className="w-full bg-gray-900 text-white py-10 mt-[50px]">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-lg font-bold">JOIN OUR DISCORD COMMUNITY</h2>
          <p className="mt-4 text-gray-300">
            Join thousands of students sharing knowledge and experiences. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Possimus amet,
            debitis corporis rerum impedit saepe maxime sed vero, voluptate
            quasi error praesentium a dicta consectetur! Illum, accusamus
            deserunt. Aspernatur, voluptatem!
          </p>
          <button className="mt-6 bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition">
            Join us
          </button>
        </div>
      </footer> */}
    </>
  );
}
