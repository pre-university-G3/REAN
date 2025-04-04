import React from "react";

export default function Card(props) {
  const { type, title, description, courses } = props;
  return (
    <div className="px-7 py-6 flex flex-col gap-y-3 items-start rounded-2xl shadow-small">
      <span className="bg-secondary/20 px-2 rounded-small text-detail-small md:text-detail-medium lg:text-detail-large text-secondary">
        {type}
      </span>
      <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large text-primary font-semibold">
        {title}
      </span>
      <p className="text-detail-small md:text-detail-medium lg:text-detail-large text-primary/70 line-clamp-3">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <figure></figure>
        <span className="flex justify-center items-center gap-x-1 text-detail-small text-[#858585] md:text-detail-medium lg:text-detail-large">
          <img src={"/icons/folder.svg"} alt="" /> {courses} courses
        </span>
      </div>
    </div>
  );
}
