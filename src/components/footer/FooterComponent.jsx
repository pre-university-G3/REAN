import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function FooterComponent() {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-8 py-8 px-5 md:px-[60px] lg:px-[120px] text-white bg-primary z-100">
      <section className="flex flex-col-reverse lg:flex-row w-full justify-between gap-8">
        <figure className="w-full lg:w-[300px] flex flex-row lg:flex-col gap-4  items-center justify-center">
          <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
            Organized by
          </h3>
          <img className="flex lg:hidden" src={"/icons/istadv2.svg"} alt="" />
          <img
            className="w-[100px] hidden lg:flex"
            src={"/icons/istad_circle.svg"}
            alt="ISTAD logo"
          />
          <figcaption className="w-fit hidden text-center lg:flex text-sub-title-large h-auto font-semibold">
            Institute of Science and Technology Advanced Development
          </figcaption>
        </figure>

        {/* Navigation Block */}
        <div className="flex gap-16 justify-between ">
          {/* Explore */}
          <nav className="flex flex-col items-start space-y-10">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
              Explore
            </h3>
            <ul className="flex flex-col items-start gap-y-4">
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/courses"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/about#contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          {/* Category */}
          <nav className="flex flex-col items-start space-y-10">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
              Category
            </h3>
            <ul className="flex flex-col items-start gap-y-4">
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/courses"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/courses"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/courses"
                >
                  UXUI Design
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/courses"
                >
                  Programming
                </Link>
              </li>
            </ul>
          </nav>
          {/* Information */}
          <nav className="flex flex-col items-start space-y-10">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
              Information
            </h3>
            <ul className="flex flex-col items-start gap-y-4">
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/courses"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/courses"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/courses"
                >
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Rean Logo */}
        <figure className="flex flex-col items-center w-full lg:w-[300px]">
          <img
            className="w-[72px] md:w-[100px]"
            src={"/icons/reanlogov1.svg"}
            alt=""
          />
          <figcaption className="flex flex-col items-center">
            <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large">
              Rean
            </span>
            <p className="text-white/80 text-center text-detail-small md:text-detail-medium lg:text-detail-large">
              {" "}
              Providing free, high-quality IT courses for everyone.
            </p>
          </figcaption>
        </figure>
      </section>
      {/* Divide */}
      <div className="h-[1px] w-full bg-white/40 rounded-full"></div>
      <p className="text-body-small md:text-body-medium lg:text-body-large text-white/80">
        © 2025 Rean | All Rights Reserved
      </p>
    </footer>
  );
}
