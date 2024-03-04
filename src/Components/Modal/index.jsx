import React, { useState } from "react";
import { Modal } from "antd";
import flowers from "../../assets/flowers.png";
import cloud from "../../assets/cloud.png";
import style from "./style.module.css";
import { useSpring, animated } from "@react-spring/web";
import { congratulations } from "./congratulations.js";

export const ModalWin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState();

  const showModal = () => {
    const randomGreet =
      congratulations[Math.floor(Math.random() * congratulations.length)];
    setData(randomGreet);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [props, api] = useSpring(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      reset: true,
      loop: true,
      config: { duration: 4000 },
    }),
    []
  );

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <img src={flowers} className={style.openModalImg} onClick={showModal} />
        {<animated.img src={cloud} className={style.cloud} style={props} />}
      </div>

      <Modal
        title="Поздравляем Вас с 8 Марта"
        className={style.modalWrapper}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        <div className={style.floweContainer}>
          <div className={style.flower}>
            <div className={style.message}></div>
          </div>
          <p className={style.messageText}>{data}</p>
        </div>
        {/* {data} */}
      </Modal>
    </div>
  );
};
