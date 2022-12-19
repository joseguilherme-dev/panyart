import axios from "axios";

const baseURL = "https://panyart-api.herokuapp.com";

const request = axios.create({
  baseURL,
  withCredentials: true,
});

request.defaults.withCredentials = true;

export default request;
