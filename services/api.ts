import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://callix-backend.herokuapp.com"
      : "http://localhost:3333",
});
