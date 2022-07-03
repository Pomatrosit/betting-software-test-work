import { block } from "bem-cn";

const header = block("register-form-header");
const content = block("register-form-content");

export const WeatherHeader = () => {
  return (
    <div className={header()}>
      <h3 className={header("title")}>Погода</h3>
    </div>
  );
};

export const WeatherContent = () => {
  return (
    <div className={content()}>
      <h3 className={content("text")}>
        Погода в Лабытнангах ожидается малооблачная с кучевыми облаками и
        теплая. Вероятность осадков 13%. Атмосферное давление в пределах нормы
        (749—750 мм рт.ст.). Температура воздуха +19...+23°C. Ветер слабый (1—2
        м/с). Относительная влажность 36—38%.
      </h3>
    </div>
  );
};
