import axios from "axios";

const iAxios = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
});

export default iAxios;
