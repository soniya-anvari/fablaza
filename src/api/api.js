import axios from "axios";

const BASE_URL = "localhost:3000/v1/categories/health-care/search";

export const api =  axios.create({ baseURL: BASE_URL })// ✅ ارسال درخواست GET واقعی