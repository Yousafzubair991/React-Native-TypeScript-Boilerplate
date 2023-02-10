import { PayloadInterface } from "../constants/types";
import authAxios from "./client";

// -----------Login---------------
export const UserLogin = (payload: PayloadInterface) => {
  let result = authAxios.post("/api/account/Login", payload); //dummy endpoint
  return result;
};
