import axios from "axios";
export const axio = axios.create({
  baseURL: "http://localhost:8001",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
