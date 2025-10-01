import { Request, Response } from "express";
import { AuthService } from "../services/authServices";
import { studentModel } from "../Model/studentModel";
import { isStudentLogged } from "../authMiddleware/authMiddlewere";


export class AuthController {
    constructor(private authService: AuthService) { }
    async getRegister(req: Request, res: Response) {
        if(!req.session.student){
            res.render('studentSignup')
        }
      
    }
    async getLogin(req: Request, res: Response) {
        if(!req.session.student){
            res.render('studentLogin')
        }
        
    }
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            console.log('from student login',req.body);
            
            const student = await this.authService.login(email, password)
            if (student) {
                 (req.session as any).student = student;
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
                (req.session as any).student = student;
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
    async logout(req:Request,res:Response){
        console.log('from student logout');
        
        req.session.destroy(err=>{
            if(err){
                return res.json({success:false,message:"Error in logout"})
            }else{
                return res.status(200).json({success:true,message:"Student logout successful"})
            }
        })
    }
    
}