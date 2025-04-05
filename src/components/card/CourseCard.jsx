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
    <>
      <div
        onClick={handleClick}
        className=" flex flex-col shadow-sm rounded-md"
      >
        <img className="h-[180px] rounded-t-xl" src={avatar} />
        <div className="flex flex-col h-full gap-y-3 p-4 bg-white rounded-md">
          <div className="flex flex-col gap-y-1">
            <span className="text-sub-title-small md:text-sub-title-medium lg:text-sub-title-large text-start">
              <b>{title}</b>
            </span>
            <span className="text-accent ">{subtitle}</span>
          </div>
          <span className="text-detail-small md:text-detail-medium lg:text-detail-large line-clamp-2 text-gray-600">
            {description}
          </span>
          <div className="flex flex-col gap-y-2 ">
            <div className="w-full h-[0.0625rem] bg-gray-400"></div>
            <div className="flex w-full justify-between">
              <div className="flex gap-1">
                <img className="w-[14px]" src="/images/lesson.svg" alt="" />
                <span className="text-detail-small md:text-detail-medium lg:text-detail-large text-gray-600">
                  {lesson} Lessons
                </span>
              </div>
              <div className="flex gap-1">
                <img className="w-[14px]" src="/images/time.svg" alt="" />
                <span className="text-detail-small md:text-detail-medium lg:text-detail-large text-gray-600">
                  {time} Hours
                </span>
              </div>
            </div>
          </div>
          <input
            onClick={handleClick}
            className="w-full small-button"
            type="button"
            value="Save"
          />
        </div>
      </div>
    </>
  );
}
