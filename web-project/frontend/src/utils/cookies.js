import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getCookies = () => {
  return cookies;
};
