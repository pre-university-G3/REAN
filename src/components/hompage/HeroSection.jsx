import React from "react";

export default function HeroSection() {
  return (
    <section className="-z-40 flex flex-col   w-full h-fit md:h-[100vh]  md:flex-row justify-center overflow-clip pt-[50px] sm:pt-[72px] px-5 md:px-[60px] lg:px-[120px]">
      <article className=" space-y-8 w-full h-screen md:h-full md:w-[70vw] flex flex-col justify-center text-center md:text-start">
        <h1 className="text-h1-small md:text-h1-medium xl:text-h1-large font-bold text-primary">
          Transform Your Future with Quality{" "}
          <span className="text-accent">Education</span> and Lifelong Learning
        </h1>
        <p className="text-black/60 text-body-text-small md:text-body-text-medium xl:text-body-text-large">
          Explore expert-led courses, gain valuable skills, and unlock new
          opportunities for personal and professional growth.{" "}
        </p>
        <div className="flex space-x-2.5 justify-center md:justify-start">
          <button className="large-button w-full max-w-[232px]">
            Get Started
          </button>
          <button className="flex justify-center items-center w-full max-w-[232px] rounded-small bg-white text-accent border-2 border-accent hover:text-white hover:bg-accent transition-colors ease-in-out duration-300 h-full">
            Learn more
          </button>
        </div>
      </article>
      <figure className=" w-full h-full flex justify-center items-center">
        <img className="w-full h-full" src={"./img/heroimage.svg"} alt="" />
        <div></div>
      </figure>
      <img
        className="absolute top-[-5px] right-[-100px] z-0"
        src={"./img/elementarrow.svg"}
        alt=""
      />
      <img
        className="absolute top-[-100px] left-[-150px] z-0"
        src={"./img/ellipse.svg"}
        alt=""
      />
      <img
        className="absolute bottom-[-50px] left-[-10px] z-0"
        src={"./img/elementarrow01.svg"}
        alt=""
      />
    </section>
  );
}
