export const getDays = () => {
  const days = [];
  for (let i = 31; i > 0; i--) {
    days.push(i);
  }
  return days;
};

export const getMonths = () => [
  "янв",
  "фев",
  "мар",
  "апр",
  "мая",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

export const getYears = () => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i > 1900; i--) {
    years.push(i);
  }
  return years;
};
