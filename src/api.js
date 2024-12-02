import axios from "axios";

const api = axios.create({
  baseURL: "http://0.0.0.0:5000/api/professores", 
});

export default api;