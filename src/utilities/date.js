/** @format */

import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

export const day = () => {
  dayjs.extend(LocalizedFormat);
  const day = dayjs().format("ll");
  return day;
};

export const dayToBeConverted = (day) => {
  dayjs.extend(LocalizedFormat);
  const newDay = dayjs(day).format("ll");
  return newDay;
};
