import { ChangeEvent, FC } from "react";
import "./TextField.scss";
import { block } from "bem-cn";

const textField = block("text-field");

interface ITextFieldProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  type?: string;
}

const TextField: FC<ITextFieldProps> = ({
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={(e) => handleChange(e)}
      className={textField()}
      placeholder={placeholder}
    />
  );
};

export default TextField;
