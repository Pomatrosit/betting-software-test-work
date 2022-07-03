import { block } from "bem-cn";
import { FC, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Button from "../Button/Button";
import { NewsContent, NewsHeader } from "../News/News";
import {
  RegisterFormContent,
  RegisterFormHeader,
} from "../RegisterForm/RegisterForm";
import { WeatherContent, WeatherHeader } from "../Weather/Weather";
import "./ManagerContainer.scss";

const container = block("manager-container");

const ManagerContainer = () => {
  const { setModal } = useContext(ModalContext);

  const openModal = (Header: FC, Content: FC) => {
    setModal({
      isOpen: true,
      Header,
      Content,
    });
  };

  return (
    <div className={container()}>
      <h1 className={container("title")}>
        Менеджер управления модальными окнами
      </h1>
      <hr />
      <div className={container("button-group")}>
        <div className={container("button-wrap")}>
          <Button
            text="Регистрация"
            onClick={() => openModal(RegisterFormHeader, RegisterFormContent)}
          />
        </div>
        <div className={container("button-wrap")}>
          <Button
            text="О погоде"
            onClick={() => openModal(WeatherHeader, WeatherContent)}
          />
        </div>
        <div className={container("button-wrap")}>
          <Button
            text="Новости"
            onClick={() => openModal(NewsHeader, NewsContent)}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerContainer;
