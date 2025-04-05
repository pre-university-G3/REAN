import React, { useState } from "react";

export default function CategoryCard(props) {
  const [isClick, setClick] = useState(false);
  const { title, icon } = props;
  const handleClick = () => {
    setClick(!isClick);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex items-center cursor-pointer transition-all ease-in-out duration-300 gap-3 shadow-small w-fit flex-shrink-0 p-4 rounded-small ${
        isClick ? "bg-accent/20" : ""
      }`}
    >
      <img className="w-6" src={icon} />
      <span className="text-body-text-small md:text-body-text-medium lg:text-body-large capitalize">
        {title}
      </span>
    </div>
  );
}
