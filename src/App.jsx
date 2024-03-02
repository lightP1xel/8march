import style from "./style.module.css";
import { MainImage } from "./Components/MainImage";
import { ModalWin } from "./Components/Modal";
import { EndText } from "./Components/EndText";
import { MainText } from "./Components/MainText";
import { VideoII } from "./Components/VideoIi";

export const App = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <MainImage />
        <MainText />
        <ModalWin />
        <VideoII />
        <EndText />
      </div>
    </div>
  );
};
