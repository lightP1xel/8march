import React from "react";
import flowers from "../../assets/flowers.jpg";
import style from "./style.module.css";

export const MainImage = () => {
  return <img className={style.image} src={flowers} alt="Flowers" />;
};
