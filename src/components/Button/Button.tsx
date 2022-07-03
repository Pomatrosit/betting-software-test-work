import { FC } from "react";
import "./Button.scss";
import { block } from "bem-cn";

const button = block("button");

interface IButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<IButtonProps> = ({ text, onClick }) => {
  return (
    <button className={button()} onClick={onClick}>
      <span className={button("text")}>{text}</span>
    </button>
  );
};

export default Button;
