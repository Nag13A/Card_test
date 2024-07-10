import React from "react";
import Icons from "./sprite.svg";
import "./IconStyle.css";

export const Icon = ({ id, className }) => {
  return (
    <div>
      <svg className={className}>
        <use href={Icons + "#icon-" + id}></use>
      </svg>
    </div>
  );
};
