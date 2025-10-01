import mongoose,{ Schema,model } from "mongoose";
export interface IAdmin{
    name?:string,
    password:string,
    email:string
}

const adminSchema=new Schema<IAdmin>({
email:String,
password:String,
})

export const adminModel=mongoose.model('Admin',adminSchema)