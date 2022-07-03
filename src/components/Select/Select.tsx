import { ChangeEvent, FC } from "react";
import "./Select.scss";
import { block } from "bem-cn";
import Arrow from "../Icons/Arrow";

const select = block("select");

interface ISelectProps {
  name: string;
  options: Array<string | number>;
  value?: string;
  onChange: (name: string, value: string) => void;
}

const Select: FC<ISelectProps> = ({ name, options, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className={select()}>
      <select
        name="select"
        className={select("main")}
        value={value || options[0]}
        onChange={(e) => handleChange(e)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className={select("arrow")}>
        <Arrow />
      </div>
    </div>
  );
};

export default Select;
