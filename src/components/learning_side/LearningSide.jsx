import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../header/HeaderComponent";
export default function LearninPages() {
  const [logo, setLogo] = useState("/icons/menu.svg");
  const [isClick, setClick] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setClick(false);
      setLogo("/icons/menu.svg");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {/* Small_Device */}
      <section className="fixed sm:hidden w-full animated h-fit mt-12.25">
        <nav
          cclassName={`relative h-[50px] z-50 w-full px-[30px] bg-white animated shadow-small flex justify-between items-center`}
        >
          <figure
            className="hover:bg-black animated h-8 w-8 rounded-small flex justify-center items-center cursor-pointer"
            onClick={() => {
              setLogo(isClick ? "/icons/menu.svg" : "/icons/xmenu.svg");

              setClick(!isClick);
            }}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isClick ? "rotate-180" : "rotate-0"
              }`}
            >
              <img src={logo} alt="Menu icons" />
            </div>
          </figure>
        </nav>
        <nav
          className={`absolute w-full h-fit z-40 bg-white border-b-[1px] transition-all duration-700 ease-in-out border-gray-300 px-[30px] py-4 rounded-b-small  ${
            isClick ? "opacity-100 " : " translate-y-[-232px]"
          }`}
        >
          <ul className="h-full space-y-2 flex flex-col justify-between">
            <Link className="font-semibold text-detail-medium" to="/">
            Chapter 1
            </Link>
            <li>
              <Link className="font-semibold text-detail-medium" to="/">
              Chapter 2
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-detail-medium" to="/about">
              Chapter 3
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-detail-medium" to="/login">
              Chapter 4
              </Link>
            </li>
            <li>
              <Link
                className="text-accent font-semibold text-detail-medium"
                to="/register"
              >
                Chapter 5
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      {/* Mid */}
      <section className="hidden fixed w-full sm:flex flex-col items-end lg:hidden mt-16.25">
        <nav
          className="relative z-50 h-[72px] w-full px-[60px] shadow-small flex justify-between items-center bg-white "
        >
          <figure
            className="hover:bg-black animated h-8 w-8 rounded-small flex justify-center items-center cursor-pointer"
            onClick={() => {
              setLogo(isClick ? "/icons/menu.svg" : "/icons/xmenu.svg");

              setClick(!isClick);
            }}
          >
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isClick ? "rotate-180" : "rotate-0"
              }`}
            >
              <img src={logo} alt="Menu icons" />
            </div>
          </figure>
        </nav>
        <nav
          className={`absolute w-full h-fit z-40 bg-white border-b-[1px] transition-all duration-700 ease-in-out border-gray-300 px-[30px] py-4 rounded-b-small  ${
            isClick ? "opacity-100 " : " translate-y-[-232px]"
          }`}
        >
          <ul className="h-full space-y-2 flex flex-col justify-between ">
            <Link className="font-semibold text-detail-medium" to="/">
              C1
            </Link>
            <li>
              <Link className="font-semibold text-detail-medium" to="/">
                C2
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-detail-medium" to="/about">
                C3
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-detail-medium" to="/login">
                C4
              </Link>
            </li>
            <li>
              <Link
                className="text-accent font-semibold text-detail-medium"
                to="/register"
              >
                C5
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      {/* Large Screen */}
      <section className="hidden fixed lg:flex h-full w-[20.22%] mt-18.25 bg-white shadow-small">
        <nav>
          <ul className="flex-col space-x-1 w-[100%] ">
            <li>
              <Link
                className="font-semibold text-detail-large text-accent"
                to="/"
              >
                Chapter 1
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-detail-large" to="/">
                Chapter 2
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-detail-large" to="/">
                Chapter 3
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-detail-large" to="/">
                Chapter 4
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-detail-large" to="/">
                Chapter 5
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <header>
        <HeaderComponent />
      </header>
    </>
  );
}
