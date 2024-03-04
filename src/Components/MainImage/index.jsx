import React from "react";
import flowers from "../../assets/flowers.png";
import style from "./style.module.css";

export const MainImage = () => {
  return <img className={style.image} src={flowers} alt="Flowers" />;
};
