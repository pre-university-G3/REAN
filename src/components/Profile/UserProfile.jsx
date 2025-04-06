import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../public/img/image.png";

export default function UserProfile() {
  const navigate = useNavigate();
  const ProfileInfo = [
    { label: "Username", value: "Kung Sovamda" },
    { label: "Role", value: "Student" },
    { label: "Gender", value: "Male" },
    { label: "Email", value: "much@gmail.com" },
  ];

  return (
    <>
      {/* You had an invalid Link here — removed */}

      <section className="h-screen flex flex-col space-y-10">
        <div className="container w-full flex justify-between items-center">
          <div className="img-profile flex justify-content-center items-center ">
            <div className="w-[120px] h-[120px] pt-2">
              <img
                className="border-1 rounded-full w-[120px] h-[120px]"
                src="https://cdn.pixabay.com/photo/2022/12/10/13/46/attack-7647136_1280.png"
                alt=""
              />
            </div>
            <div className="mr-[100px] flex-col p-2">
              <h2 className="mb-2 text-2xl">Kung sovanda</h2>
              <p className="">moah@gmail.com</p>
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
              className="medium-button"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-full max-w-5xl mx-auto mt-10 ml-7 h-[50vh]">
          <div className="bg-white rounded-lg shadow-md p-6 w-[400px] border border-gray-200">
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
          <div className="w-[500px] h-full flex justify-center items-center">
            <img
              className="w-[550px] h-[500px] object-contain"
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
