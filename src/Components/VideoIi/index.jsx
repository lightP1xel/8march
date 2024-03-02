import React from "react";
import style from "./style.module.css";
import Video from "../../assets/Video.mp4";

export const VideoII = () => {
  return (
    <video controls className={style.videoWrapper}>
      <source src={Video} />
    </video>
  );
};
