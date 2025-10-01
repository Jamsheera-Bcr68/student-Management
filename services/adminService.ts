import { adminModel,IAdmin } from "../Model/adminModel";
import { IStudent, studentModel } from "../Model/studentModel";

export class AdminService{
    async login(email:string,password:string):Promise<IAdmin|null>{

        const admin=await adminModel.findOne({email,password})
        console.log('admin ',admin);
        
        return admin
    }
    async getAllStudents():Promise<IStudent[]>{
        const students=await studentModel.find()
        return students
    }
}
