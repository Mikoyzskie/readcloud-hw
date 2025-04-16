import { Document } from "mongoose";

export interface ICourses extends Document {
  _id: string;
  title: string;
  description: string;
}
