import { Document } from "mongoose";

export interface IUsers extends Document {
  _id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
}
