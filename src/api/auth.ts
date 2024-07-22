import axios from "axios";
import { LoginInput } from "./types";

export const BASE_URL = "http://localhost:3000/api/v1";

export const authApi = axios.create({
  baseURL: BASE_URL,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

export const loginUserFn = async (user: LoginInput) => {
  const res = authApi.post("/login", user);
  return (await res).data;
};
