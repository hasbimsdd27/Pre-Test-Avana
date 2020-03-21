import { GET_SIDEBAR } from "../config/constants";

export const getSidebar = () => {
  return {
    type: GET_SIDEBAR,
    payload: () => {
      const data = require("../assets/json/dummy-menu.json");

      return data;
    }
  };
};
