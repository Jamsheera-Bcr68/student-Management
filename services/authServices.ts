import {studentModel,IStudent} from '../Model/studentModel'

export class AuthService{
async login(email:string,password:string):Promise<IStudent|null>{
const student=await studentModel.findOne({email,password}).exec()
return student
}

async register(student:IStudent):Promise<IStudent>{
    const studentExist=await studentModel.findOne({email:student.email})
    if(studentExist){
        console.log('existing student',studentExist);
        
        throw Error('Student is already existing')
    }
     const newStudent=new studentModel(student)
    await newStudent.save()
    console.log('Student saved ');
    
    return newStudent
   
}
}