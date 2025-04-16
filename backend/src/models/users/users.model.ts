import mongoose, { Schema } from "mongoose";
import { IUsers } from "../../types/users/users.type";

const userSchema: Schema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  enrolledCourses: { type: [String], default: [] },
});

export const Users = mongoose.model<IUsers>("users", userSchema);
