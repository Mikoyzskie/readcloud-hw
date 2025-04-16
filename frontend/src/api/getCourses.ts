import {Courses} from "../types/types";
import {API_PATH} from "../enums/enums"

export const getCourses = async (): Promise<Courses[]> => {
 const response = await fetch(
  `${import.meta.env.VITE_API_URL}${API_PATH.COURSES}`
 );
 return await response.json();
};
