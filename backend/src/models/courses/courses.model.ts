import mongoose, { Schema } from "mongoose";
import { ICourses } from "../../types/types";

const courseSchema: Schema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export const Courses = mongoose.model<ICourses>("courses", courseSchema);
