import express = require("express");
import { Request, Response } from "express";
import { studentModel } from "../Model/studentModel";
import { AdminService } from "../services/adminService";

const router = express.Router()
export class AdminController {
    constructor(private adminService: AdminService) { }
    async getLogin(req: Request, res: Response) {
        res.render("login")
    }
    async postLogin(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            console.log(req.body);

            const admin = await this.adminService.login(email, password)
            console.log('admin ', admin);

            if (admin) { return res.status(200).json({ success: true, message: 'Login Successfull' }) }
            else return res.status(500).json({ success: false, message: 'Invalid Credentials' })
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error' })
        }
    }
    async getStudentManagement(req: Request, res: Response) {
        //  console.log('from getStudentMangement');
        const students = await this.adminService.getAllStudents()
        // console.log('students', students);

        res.render('studentManagement', { students })
    }
    async getStudent(req: Request, res: Response) {
        try {


            let studentId = req.params.studentId


            if (!studentId) {
                return res.status(300).json({ success: false, message: 'Student Id is not found' })
            }
            const student = await this.adminService.getStudent(studentId)
            if (student) {


                return res.status(200).json({ success: true, student })
            } else {
                throw Error('Student not found')
            }
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message || 'server error' })
        }
    }
    async editStudent(req: Request, res: Response) {
        try {
            console.log('from admin controll edit stusnt');
            let studentId = req.params.studentId
            console.log('studentId', studentId);

            let data = req.body
            console.log('data', data);

            if (studentId) {
                let student = await this.adminService.editStudent(studentId, data)
                if (student) {
                    return res.status(200).json({ success: true, message: 'student updated success fully', student })
                }
            } else {
                console.log('Student  id is not found');

                throw Error("Student  id is not found")
            }

        } catch (error: any) {

        }
    }
    async deleteStudent(req: Request, res: Response) {
        try {
            let studentId = req.params.studentId
            if (!studentId) {
                throw Error('student id id not found')
            }
            let isDeleted=await this.adminService.deleteStudent(studentId)
            if(isDeleted){
                return res.status(200).json({success:true,message:'Student deleted succedd fully'})
            }
        }catch(err:any){
            return res.status(500).json({success:false,message:err.message||'Server Error'})
        }
    }
}


export const getAllStudent: express.RequestHandler = async (req, res) => {
    try {
        const students = await studentModel.find()
        if (students.length > 0) return res.status(200).json({ message: "Students data", students })
        return res.status(500).json({ message: 'student is empty' })
    } catch (error) {
        return res.status(500).json({ message: "server error" })
    }

}
