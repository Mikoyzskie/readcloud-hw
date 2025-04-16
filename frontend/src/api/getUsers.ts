import { Users } from "../types/types";
import { API_PATH } from "../enums/enums";

export const getUsers = async (): Promise<Users[]> => {
 const response = await fetch(
  `${import.meta.env.VITE_API_URL}${API_PATH.USERS}`
 );
 return await response.json();
};
