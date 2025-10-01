import { Request, Response } from "express";
import { AuthService } from "../services/authServices";
import { studentModel } from "../Model/studentModel";
//import { getLogin } from "./adminController";


export class AuthController {
    constructor(private authService: AuthService) { }
    async getRegister(req: Request, res: Response) {
        res.render('studentSignup')
    }
    async getLogin(req: Request, res: Response) {
        res.render('studentLogin')
    }
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            console.log('from student login',req.body);
            
            const student = await this.authService.login(email, password)
            if (student) {
                return res.status(200).json({success:true, message: 'Login Success ful' })
            } else {
                return res.status(500).json({ success:false, message: 'Invalid Credentials' })
            }
        } catch {
            return res.status(500).json({success:false, message: 'Server Error' })
        }
    }
    async register(req: Request, res: Response) {
        try {
          
            const student = await this.authService.register(req.body)
            console.log('student is ',student);
            if(student){
                //req.session.studentId=student.id
                 return res.status(200).json({success:true, message: 'Signup Success full' })
            }else{
                 return res.status(500).json({success:false, message: 'student not found' })
            }
           
        } catch (error:any) {
            res.status(500).json({ message:error.message ||'server errror' })
        }
    }

    async getHome(req:Request,res:Response){
        res.render('home')
    }
}