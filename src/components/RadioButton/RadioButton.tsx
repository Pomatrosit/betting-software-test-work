import { FC } from "react";
import "./RadioButton.scss";
import { block } from "bem-cn";

const radio = block("radio-button");

interface IRadioButtonProps {
  name: string;
  value: string;
  text: string;
  isActive: boolean;
  onChange: (name: string, value: string) => void;
}

const RadioButton: FC<IRadioButtonProps> = ({
  name,
  value,
  text,
  isActive,
  onChange,
}) => {
  const inputClasses = [radio("input")];
  if (isActive) inputClasses.push(radio("input", { active: true }));

  const handleClick = () => {
    onChange(name, value);
  };

  return (
    <div className={radio()} onClick={handleClick}>
      <span className={radio("text")}>{text}</span>
      <div className={inputClasses.join(" ")}></div>
    </div>
  );
};

export default RadioButton;
