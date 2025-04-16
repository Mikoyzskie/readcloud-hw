import { Users } from "../types/types";
import { API_PATH } from "../enums/enums";

export const getUsers = async (id:string): Promise<Users[]> => {
 const response = await fetch(
  `${import.meta.env.VITE_API_URL}${API_PATH.USERS}/${id}`
 );
 return await response.json();
};
