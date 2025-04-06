import React, { useEffect, useState } from "react";
import IsLogin from "../../auth/IsLogin";
import { useNavigate } from "react-router-dom";

export default function CourseCard(props) {
  const { avatar, title, subtitle, description, lesson, time } = props;
  const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAuth(IsLogin);
  }, []);

  const handleClick = () => {
    navigate(isAuth ? `/` : "/login");
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col shadow-sm rounded-md transition-all duration-300 ease-in-out dark:bg-black dark:hover:bg-gray-800"
    >
      <img className="h-[180px] rounded-t-xl" src={avatar} alt={title} />
      <div className="flex flex-col h-full gap-y-3 p-4 dark:bg-black bg-white rounded-b-md">
        <div className="flex flex-col gap-y-1">
          <span className="text-primary dark:text-white text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large text-start">
            <b>{title}</b>
          </span>
          <span className="text-accent">{subtitle}</span>
        </div>
        <span className="text-gray-600 dark:text-gray-400 text-detail-small md:text-detail-medium lg:text-detail-large line-clamp-2">
          {description}
        </span>
        <div className="flex flex-col gap-y-2">
          <div className="w-full h-[0.0625rem] bg-gray-400"></div>
          <div className="flex w-full justify-between">
            <div className="flex gap-1">
              <img
                className="w-[14px]"
                src="/images/lesson.svg"
                alt="lesson icon"
              />
              <span className="text-gray-600 dark:text-dark-primary/40 text-detail-small md:text-detail-medium lg:text-detail-large">
                {lesson} Lessons
              </span>
            </div>
            <div className="flex gap-1">
              <img
                className="w-[14px]"
                src="/images/time.svg"
                alt="time icon"
              />
              <span className="text-gray-600 dark:text-dark-primary/40 text-detail-small md:text-detail-medium lg:text-detail-large">
                {time} Hours
              </span>
            </div>
          </div>
        </div>
        <input
          onClick={handleClick}
          className="w-full small-button bg-accent hover:bg-accent-light text-white"
          type="button"
          value="Save"
        />
      </div>
    </div>
  );
}
