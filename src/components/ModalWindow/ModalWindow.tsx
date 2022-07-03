import { block } from "bem-cn";
import { FC, useContext, useEffect, useRef } from "react";
import { ModalContext } from "../../context/ModalContext";
import CloseIcon from "../Icons/CloseIcon";
import { NewsContent, NewsHeader } from "../News/News";
import {
  RegisterFormContent,
  RegisterFormHeader,
} from "../RegisterForm/RegisterForm";
import { WeatherContent, WeatherHeader } from "../Weather/Weather";
import "./ModalWindow.scss";

const modalWindow = block("modal");

const ModalWindow = () => {
  const { modal, setModal } = useContext(ModalContext);

  const handleCloseIconClick = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleClose = () => {
    if (isClickedOutsideModal.current)
      setModal((prev) => ({ ...prev, isOpen: false }));
  };

  const isClickedOutsideModal = useRef<boolean>(false);
  const overlayRef = useRef<HTMLInputElement | null>(null);

  const checkClickOutsideModal = (e: any) => {
    if (e.target.closest(`.${modalWindow("body")}`))
      isClickedOutsideModal.current = false;
    else isClickedOutsideModal.current = true;
  };

  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.addEventListener("mousedown", checkClickOutsideModal);
    }

    return () => {
      if (overlayRef.current) {
        overlayRef.current.removeEventListener(
          "mousedown",
          checkClickOutsideModal
        );
      }
    };
  }, []);

  const switchModal = (Header: FC, Content: FC) => {
    setModal({
      isOpen: true,
      Header,
      Content,
    });
  };

  return (
    <div className={modalWindow()}>
      <div
        className={modalWindow("overlay")}
        onClick={handleClose}
        ref={overlayRef}
      >
        <div
          className={modalWindow("body")}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={modalWindow("header")}>
            {modal.Header && <modal.Header />}
            <div
              className={modalWindow("close-icon")}
              onClick={handleCloseIconClick}
            >
              <CloseIcon />
            </div>
          </div>
          <div className={modalWindow("content")}>
            {modal.Content && <modal.Content />}
          </div>
          <div className={modalWindow("footer")}>
            <div
              className={modalWindow("footer-link")}
              onClick={() =>
                switchModal(RegisterFormHeader, RegisterFormContent)
              }
            >
              <a href="#" className="secondary-link">
                Регистрация
              </a>
            </div>
            <div
              className={modalWindow("footer-link")}
              onClick={() => switchModal(WeatherHeader, WeatherContent)}
            >
              <a href="#" className="secondary-link">
                О погоде
              </a>
            </div>
            <div
              className={modalWindow("footer-link")}
              onClick={() => switchModal(NewsHeader, NewsContent)}
            >
              <a href="#" className="secondary-link">
                Новости
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
