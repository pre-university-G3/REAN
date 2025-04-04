import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function FooterComponent() {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-6 md:gap-8 py-6 md:py-8 px-4 sm:px-5 md:px-[60px] lg:px-[120px] text-white bg-primary">
      <section className="flex flex-col lg:flex-row w-full justify-between gap-6 md:gap-8">
        {/* Organized by block - now on top for mobile */}
        <figure className="w-full flex flex-col items-center lg:items-start lg:w-[300px] gap-3 md:gap-4">
          <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
            Organized by
          </h3>
          <div className="flex flex-col md:flex-row lg:flex-col items-center gap-4">
            <img 
              className="w-16 md:w-20 lg:w-[100px]" 
              src={"/icons/istadv2.svg"} 
              alt="ISTAD logo" 
            />
            <figcaption className="text-sub-title-small md:text-sub-title-medium text-center lg:text-left font-semibold">
              Institute of Science and Technology Advanced Development
            </figcaption>
          </div>
        </figure>

        {/* Navigation Block - now in a grid for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 md:flex md:justify-between md:flex-1 lg:mx-8">
          {/* Explore */}
          <nav className="flex flex-col items-start space-y-4 md:space-y-6 lg:space-y-8">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
              Explore
            </h3>
            <ul className="flex flex-col items-start gap-y-2 md:gap-y-3 lg:gap-y-4">
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/courses"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/about#contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Category */}
          <nav className="flex flex-col items-start space-y-4 md:space-y-6 lg:space-y-8">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
              Category
            </h3>
            <ul className="flex flex-col items-start gap-y-2 md:gap-y-3 lg:gap-y-4">
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/courses"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/courses"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/courses"
                >
                  UXUI Design
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/courses"
                >
                  Programming
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Information */}
          <nav className="flex flex-col items-start space-y-4 md:space-y-6 lg:space-y-8">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
              Information
            </h3>
            <ul className="flex flex-col items-start gap-y-2 md:gap-y-3 lg:gap-y-4">
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/courses"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/courses"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/courses"
                >
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Rean Logo - now at bottom for mobile */}
        <figure className="flex flex-col items-center w-full lg:w-[300px] mt-4 md:mt-0 order-first lg:order-last">
          <img
            className="w-16 md:w-20 lg:w-[100px]"
            src={"/icons/reanlogov1.svg"}
            alt="Rean logo"
          />
          <figcaption className="flex flex-col items-center mt-2 md:mt-3">
            <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large">
              Rean
            </span>
            <p className="text-white/80 text-center text-detail-small md:text-detail-medium lg:text-detail-large mt-1">
              Providing free, high-quality IT courses for everyone.
            </p>
          </figcaption>
        </figure>
      </section>
      
      {/* Divide */}
      <div className="h-px w-full bg-white/40 rounded-full my-2 md:my-4"></div>
      
      <p className="text-body-small md:text-body-medium lg:text-body-large text-white/80 text-center">
        © 2025 Rean | All Rights Reserved
      </p>
    </footer>
  );
}