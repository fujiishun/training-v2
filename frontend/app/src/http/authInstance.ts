import axios from "axios";

const authInstance = axios.create({
  baseURL: "http://localhost:3001/auth",
  timeout: 1000,
});

export default authInstance;
