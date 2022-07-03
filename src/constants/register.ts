import { getDays, getMonths, getYears } from "../helpers/lists";

export const REGISTER_TEXT_FIELDS = [
  { name: "firstName", placeholder: "Имя", type: "text" },
  { name: "lastName", placeholder: "Фамилия", type: "text" },
  {
    name: "email",
    placeholder: "Номер мобильного телефона или эл. адрес",
    type: "text",
  },
  { name: "password", placeholder: "Новый пароль", type: "password" },
  { name: "repeatPassword", placeholder: "Повторите пароль", type: "password" },
];

export const REGISTER_SELECTS = [
  { name: "birthDay", options: getDays() },
  { name: "birthMonth", options: getMonths() },
  { name: "birthYear", options: getYears() },
];

export const REGISTER_RADIO_BUTTONS = [
  { name: "gender", value: "female", text: "Женщина" },
  { name: "gender", value: "male", text: "Мужчина" },
  { name: "gender", value: "other", text: "Другое" },
];
