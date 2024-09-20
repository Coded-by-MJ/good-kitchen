import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const customFetch = axios.create({
  baseURL: url,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
