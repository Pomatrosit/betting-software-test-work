import { block } from "bem-cn";
import { useState } from "react";
import {
  REGISTER_RADIO_BUTTONS,
  REGISTER_SELECTS,
  REGISTER_TEXT_FIELDS,
} from "../../constants/register";
import { ICandidate } from "../../types/candidate";
import Button from "../Button/Button";
import Question from "../Icons/Question";
import RadioButton from "../RadioButton/RadioButton";
import Select from "../Select/Select";
import TextField from "../TextField/TextField";
import "./RegisterForm.scss";

const header = block("register-form-header");
const content = block("register-form-content");

export const RegisterFormHeader = () => {
  return (
    <div className={header()}>
      <h3 className={header("title")}>Создать аккаунт</h3>
      <p className={header("subtitle")}>Быстро и легко.</p>
    </div>
  );
};

const initialCandidate = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
  birthDay: "31",
  birthMonth: "янв",
  birthYear: "2022",
  gender: "",
};

export const RegisterFormContent = () => {
  const [candidate, setCandidate] = useState<ICandidate>(initialCandidate);

  const handleChange = (name: string, value: string) => {
    setCandidate((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    alert(JSON.stringify(candidate));
  };

  return (
    <div className={content()}>
      <div className={content("group")}>
        <div className={content("form-control-group")}>
          {REGISTER_TEXT_FIELDS.slice(0, 2).map((textField) => (
            <TextField
              key={textField.name}
              {...textField}
              value={candidate[textField.name as keyof ICandidate]}
              onChange={handleChange}
            />
          ))}
        </div>

        {REGISTER_TEXT_FIELDS.slice(2).map((textField) => (
          <div className={content("form-control-group")} key={textField.name}>
            <TextField
              {...textField}
              value={candidate[textField.name as keyof ICandidate]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <div className={content("group")}>
        <p className={content("subtitle")}>
          <span>Дата рождения</span>
          <Question />
        </p>
        <div className={content("form-control-group")}>
          {REGISTER_SELECTS.map((select) => (
            <Select
              key={select.name}
              {...select}
              value={candidate.birthDay}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>

      <div className={content("group")}>
        <p className={content("subtitle")}>
          <span>Пол</span>
          <Question />
        </p>
        <div className={content("form-control-group")}>
          {REGISTER_RADIO_BUTTONS.map((radio) => (
            <RadioButton
              key={radio.value}
              {...radio}
              isActive={candidate.gender === radio.value}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>

      <div className={content("group")}>
        <p className={content("small-print")}>
          Люди, которые пользуются нашим сервисом, могли загрузить вашу
          контактную информацию на Facebook.{" "}
          <a href="#" className="primary-link">
            Подробнее
          </a>
        </p>
      </div>

      <div className={content("group")}>
        <p className={content("small-print")}>
          Нажимая кнопку Регистрация, вы принимаете{" "}
          <a href="#" className="primary-link">
            Условия, Политику использования данных
          </a>{" "}
          и{" "}
          <a href="#" className="primary-link">
            Политику в отношении файлов cookie
          </a>
          . Вы можете получать от нас SMS-уведомления, отказаться от которых
          можно в любой момент.
        </p>
      </div>

      <div className={content("register-btn")}>
        <Button text="Регистрация" onClick={handleRegister} />
      </div>

      <div className={content("have-account-phrase")}>
        <a href="#" className="secondary-link">
          У вас уже есть аккаунт?
        </a>
      </div>
    </div>
  );
};
