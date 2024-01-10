import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BaseAPI = axios.create({
  baseURL: process.env.BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default BaseAPI;
