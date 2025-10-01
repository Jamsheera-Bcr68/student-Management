import mongoose from "mongoose";
import { adminModel, IAdmin } from "../Model/adminModel";
import { IStudent, studentModel } from "../Model/studentModel";

export class AdminService {
    async login(email: string, password: string): Promise<IAdmin | null> {

        const admin = await adminModel.findOne({ email, password })


        return admin
    }
    async getAllStudents(): Promise<IStudent[]> {
        const students = await studentModel.find({isDeleted:false})
       // console.log(students);
        
        return students
    }
    async getStudent(studentId: string): Promise<IStudent | null> {


        const student = await studentModel.findOne({ _id: new mongoose.Types.ObjectId(studentId) });

        return student
    }
    async editStudent(studentId: string, data: IStudent): Promise<IStudent | null> {
        console.log( 'from service ',data);
     
        
        const student = await studentModel.findByIdAndUpdate(
            studentId,
            {
                $set: {
                    name: data.name,
                    age: data.age,
                    email: data.email,
                    phone: data.phone,
                    course: data.course
                }
            },
            { new: true } 
        );
        console.log('studentt updaterd and retudne',student);
        

        return student;
    }
    async deleteStudent(studentId:string):Promise<boolean>{
        let student=await studentModel.findOne({_id:new mongoose.Types.ObjectId(studentId)})
        if(!student){
            throw Error('student not found')
        }else if(student.isDeleted){
            throw Error("already deleted")
        }else {
            student.isDeleted=true
           await student.save()
           return true
        }
    }
}
