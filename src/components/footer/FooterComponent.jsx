import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function FooterComponent() {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
<<<<<<< HEAD
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
=======
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                  to="/courses"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
<<<<<<< HEAD
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
=======
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
<<<<<<< HEAD
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
                  to="/about"
=======
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
                  to="/about#contact"
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
<<<<<<< HEAD
          {/* Category */}
          <nav className="flex flex-col items-start space-y-10">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
              Category
            </h3>
            <ul className="flex flex-col items-start gap-y-4">
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
=======
          
          {/* Category */}
          <nav className="flex flex-col items-start space-y-4 md:space-y-6 lg:space-y-8">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
              Category
            </h3>
            <ul className="flex flex-col items-start gap-y-2 md:gap-y-3 lg:gap-y-4">
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                  to="/courses"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
<<<<<<< HEAD
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
=======
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                  to="/courses"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
<<<<<<< HEAD
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
=======
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                  to="/courses"
                >
                  UXUI Design
                </Link>
              </li>
              <li>
                <Link
<<<<<<< HEAD
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
=======
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                  to="/courses"
                >
                  Programming
                </Link>
              </li>
            </ul>
          </nav>
<<<<<<< HEAD
          {/* Information */}
          <nav className="flex flex-col items-start space-y-10">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
              Information
            </h3>
            <ul className="flex flex-col items-start gap-y-4">
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
=======
          
          {/* Information */}
          <nav className="flex flex-col items-start space-y-4 md:space-y-6 lg:space-y-8">
            <h3 className="text-h3-small md:text-h3-medium lg:text-h3-large font-semibold">
              Information
            </h3>
            <ul className="flex flex-col items-start gap-y-2 md:gap-y-3 lg:gap-y-4">
              <li>
                <Link
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                  to="/courses"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
<<<<<<< HEAD
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
=======
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                  to="/courses"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
<<<<<<< HEAD
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large"
=======
                  className="footer-nav text-body-text-small md:text-body-text-medium lg:text-body-text-large hover:text-white/80 transition-colors"
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
                  to="/courses"
                >
                  Support
                </Link>
              </li>
            </ul>
          </nav>
        </div>

<<<<<<< HEAD
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
=======
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
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
              Providing free, high-quality IT courses for everyone.
            </p>
          </figcaption>
        </figure>
      </section>
<<<<<<< HEAD
      {/* Divide */}
      <div className="h-[1px] w-full bg-white/40 rounded-full"></div>
      <p className="text-body-small md:text-body-medium lg:text-body-large text-white/80">
=======
      
      {/* Divide */}
      <div className="h-px w-full bg-white/40 rounded-full my-2 md:my-4"></div>
      
      <p className="text-body-small md:text-body-medium lg:text-body-large text-white/80 text-center">
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
        © 2025 Rean | All Rights Reserved
      </p>
    </footer>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 103ad6dd560c2b543cc5136d975ea2c0510f602d
