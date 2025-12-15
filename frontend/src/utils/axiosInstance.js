import axios from "axios";

// ✅ PRODUCTION BACKEND URL (Render)
const BASE_URL = "https://travel-diary-byanubhav.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
