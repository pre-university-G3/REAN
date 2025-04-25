import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function FooterComponent() {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-8 py-8 px-5 md:px-[60px] lg:px-[120px] text-white bg-primary dark:bg-black z-100">
      <section className="flex flex-col-reverse lg:flex-row w-full justify-between gap-8">
        {/* ISTAD Section */}
        <figure className="w-full lg:w-[300px] flex flex-row lg:flex-col justify-center lg:items-start items-center gap-4 text-center lg:text-left">
          <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold dark:text-dark-primary">
            Organized by
          </h3>
          <img
            className="lg:hidden w-[100px]"
            src={"/icons/istadv2.svg"}
            alt="ISTAD logo mobile"
          />
          <img
            className="hidden lg:block w-[100px]"
            src={"/icons/istad_circle.svg"}
            alt="ISTAD logo"
          />
          <figcaption className="hidden lg:block text-sub-title-large font-semibold dark:text-dark-primary">
            Institute of Science and Technology Advanced Development
          </figcaption>
        </figure>

        {/* Navigation Block */}
        <div className="w-full lg:w-[50%] flex flex-col sm:flex-row flex-wrap justify-between gap-10 text-center sm:text-left dark:text-dark-primary">
          {/* Explore */}
          <nav className="w-full sm:w-auto flex flex-col items-center sm:items-start gap-4">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold dark:text-dark-primary">
              Explore
            </h3>
            <ul className="flex flex-col items-center sm:items-start gap-y-2">
              <li>
                <Link className="footer-nav dark:text-dark-primary" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav dark:text-dark-primary"
                  to="/courses"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link className="footer-nav dark:text-dark-primary" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="footer-nav dark:text-dark-primary" to="/about">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Category */}
          <nav className="w-full sm:w-auto flex flex-col items-center sm:items-start gap-4">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold dark:text-dark-primary">
              Category
            </h3>
            <ul className="flex flex-col items-center sm:items-start gap-y-2">
              <li>
                <Link
                  className="footer-nav dark:text-dark-primary"
                  to="/courses"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav dark:text-dark-primary"
                  to="/courses"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav dark:text-dark-primary"
                  to="/courses"
                >
                  UXUI Design
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav dark:text-dark-primary"
                  to="/courses"
                >
                  Programming
                </Link>
              </li>
            </ul>
          </nav>

          {/* Information */}
          <nav className="w-full sm:w-auto flex flex-col items-center sm:items-start gap-4">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold dark:text-dark-primary">
              Information
            </h3>
            <ul className="flex flex-col items-center sm:items-start gap-y-2">
              <li>
                <Link
                  className="footer-nav dark:text-dark-primary"
                  to="/courses"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav dark:text-dark-primary"
                  to="/courses"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav dark:text-dark-primary"
                  to="/courses"
                >
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Rean Logo */}
        <figure className="w-full lg:w-[300px] flex flex-col items-center gap-4 text-center">
          <img
            className="w-[72px] md:w-[100px]"
            src={"/icons/reanlogov1.svg"}
            alt="Rean logo"
          />
          <figcaption className="flex flex-col items-center">
            <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large dark:text-dark-primary">
              Rean
            </span>
            <p className="text-white/80 text-detail-small md:text-detail-medium lg:text-detail-large dark:text-dark-primary/80">
              Providing free, high-quality IT courses for everyone.
            </p>
          </figcaption>
        </figure>
      </section>

      {/* Divider */}
      <div className="h-[1px] w-full bg-white/40 rounded-full dark:bg-dark-accent"></div>

      {/* Copyright */}
      <p className="text-body-small md:text-body-medium lg:text-body-large text-white/80 dark:text-dark-primary/80 text-center">
        © 2025 Rean | All Rights Reserved
      </p>
    </footer>
  );
}
