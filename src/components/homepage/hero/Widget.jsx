import React from "react";

export default function Widget(props) {
  return (
    <div
      className={`h-24 px-6 py-6 bg-white flex items-center justify-center space-x-4 rounded-2xl shadow-2xl ${props.className}`}
    >
      <figure
        className={`flex h-16 w-16 justify-center items-center rounded-2xl ${props.bg}`}
      >
        <img className="w-8 h-8" src={props.img} alt="" />
      </figure>
      <figcaption className="flex flex-col justify-between items-start ">
        <p className="text-body-text-large text-primary ">{props.title}</p>
        <p className="text-body-text-large text-primary/70">{props.des}</p>
      </figcaption>
    </div>
  );
}
