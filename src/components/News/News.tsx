import { block } from "bem-cn";

const header = block("register-form-header");
const content = block("register-form-content");

export const NewsHeader = () => {
  return (
    <div className={header()}>
      <h3 className={header("title")}>Новости</h3>
    </div>
  );
};

export const NewsContent = () => {
  return (
    <div className={content()}>
      <h3 className={content("text")}>
        В Красноярском крае очевидцы, следовавшие за патрульной машиной, сняли
        на видео необычную картину. На багажнике автомобиля ДПС ехал голубь.
        Полицейские преодолели около 500 м с пернатым пассажиром, пока он не
        воспользовался привычным способом передвижения.
      </h3>
    </div>
  );
};
