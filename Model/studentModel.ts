import mongoose, { model, Schema } from "mongoose";

export interface IStudent{
  id: number;
  password ?:number
  email: string;
  age ?:number;
  course ?: string;
  name ?: string;
  phone ?: number;
  isDeleted:boolean
}
const studentSchema = new mongoose.Schema<IStudent>({
  id: { type: Number},
  name: { type: String },
  email: { type: String, required: true },
  age: { type: Number },
  course: { type: String },
  password: { type: Number, required: true },
  phone: { type: Number },
  isDeleted:{type:Boolean,default:false}
})
export const studentModel=mongoose.model<IStudent>('Student',studentSchema)