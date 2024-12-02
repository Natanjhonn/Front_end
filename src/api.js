import axios from "axios";

const api = axios.create({
  baseURL: "https://back-end-1-kr7f.onrender.com/api/professores"
});

export default api;