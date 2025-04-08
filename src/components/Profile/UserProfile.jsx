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

      <section className="h-screen flex flex-col space-y-10 w-full p-10">
        <div className="container w-full flex justify-between items-center">
          <div className="img-profile flex gap-4 items-center ">
            <div className="w-[120px] h-[120px] pt-2">
              <img
                className="border-4 border-transparent outline-4 outline-accent rounded-full w-[120px] h-[120px]"
                src={"/img/userprofile.jpg"}
                alt=""
              />
            </div>
            <div className=" flex-col p-2">
              <h2 className=" text-h1-small text-primary dark:text-dark-primary font-bold">
                {user.biography}
              </h2>
              <p className="text-primary/70 dark:text-dark-primary/70">
                {user.email}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                navigate("/");
              }}
              type="button"
              className="px-4 py-2 text-body-text-small font-semibold text-white rounded-small  bg-red-600"
            >
              Log out
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-10 ml-7 h-[50vh]">
          <div className="bg-white w-[50%] rounded-lg shadow-md p-6  border border-gray-200">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Profile Information
            </h2>
            <div className="space-y-4">
              {ProfileInfo.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-gray-500">
                    {item.label}
                  </p>
                  <p className="flex items-center px-4 h-[52px] text-gray-800 bg-gray-100 rounded-md p-2">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <img
              className="w-full object-contain"
              src={image}
              alt="Illustration"
            />
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
