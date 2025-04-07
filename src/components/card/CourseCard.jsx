import React, { useEffect, useState } from "react";
import IsLogin from "../../auth/IsLogin";
import { useNavigate } from "react-router-dom";

export default function CourseCard(props) {
  const { thumbnail, title, subtitle, description, instructor } = props;
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
        className=" flex flex-col justify-between shadow-small rounded-small pb-2 h-[450px]"
      >
        <figure className={`h-[50%] overflow-hidden w-full rounded-t-small`}>
          <img className="h-full w-full object-cover" src={thumbnail} alt="" />
        </figure>

        {/* <img className="h-[180px] rounded-t-xl" src={avatar} /> */}
        <div className="flex flex-col gap-y-3 p-4 bg-white rounded-md">
          <div className="flex flex-col gap-y-1">
            <span className="text-sub-title-medium text-start line-clamp-1">
              <b>{title}</b>
            </span>
            <span className="text-accent ">{subtitle}</span>
          </div>
          <span className="text-detail-small line-clamp-2 md:text-detail-medium lg:text-detail-large text-gray-600">
            {description}
          </span>
          <div className="flex flex-col gap-y-2 ">
            <div className="w-full h-[0.0625rem] bg-gray-400"></div>
            <div className="flex w-full justify-between">
              <div className="flex gap-1">
                <span className="text-detail-small md:text-detail-medium lg:text-detail-large text-gray-600">
                  Instructor
                </span>
              </div>
              <div className="flex gap-1">
                <span className="text-detail-small md:text-detail-medium lg:text-detail-large text-gray-600">
                  {instructor}
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
