import axios from "axios";

const API_URL = "Your api URL here";

const validateProduct = () => {
  return axios.get(API_URL);
};

export default {
  validateProduct,
};