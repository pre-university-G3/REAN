import React from "react";

export default function Course(props) {
  const { id, category, title, lessons, time, src, onClick } = props;
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };
  return (
    <section
      className="flex flex-col p-4 space-y-2 rounded-small shadow-small"
      onClick={handleClick}
    >
      <figure
        className="w-full h-[300px] md:h-[169px] rounded-small bg-center bg-cover"
        style={{ backgroundImage: `url(${src})` }}
      ></figure>
      <span className="text-accent text-detail-large uppercase">
        {category}
      </span>
      <span className="text-sub-title-large text-primary font-semibold">
        {title}
      </span>
      <div className="flex justify-between items-center">
        <span className="flex gap-x-2 items-center text-detail-large text-primary/70">
          <img src={"./icons/lesson.svg"} alt="" /> {lessons} Lessons
        </span>
        <span className="flex gap-x-2 items-center text-detail-large text-primary/70">
          <img src={"./icons/clock.svg"} alt="" /> {time} Hours
        </span>
      </div>
    </section>
  );
}
