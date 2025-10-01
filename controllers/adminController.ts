import express = require("express"); 
import { Request,Response } from "express";
import { studentModel } from "../Model/studentModel";
import { AdminService } from "../services/adminService";

const router=express.Router()
export class AdminController{
    constructor(private adminService:AdminService){}
async getLogin (req:Request,res:Response){
    res.render("login")
}
async postLogin (req:Request,res:Response){
    try {
        const {email,password}=req.body
        console.log(req.body);
        
        const admin=await this.adminService.login(email,password)
        console.log('admin ',admin);
        
        if(admin){return res.status(200).json({success:true,message:'Login Successfull'})}
        else return res.status(500).json({success:false,message:'Invalid Credentials'})
    } catch (error) {
        return res.status(500).json({success:false,message:'Server error'})
    }
}
async getStudentManagement(req:Request,res:Response){
    console.log('from getStudentMangement');
    const students=await this.adminService.getAllStudents()
    console.log('students',students);
    
    res.render('studentManagement',{students})
}
}


export const getAllStudent:express.RequestHandler=async (req,res)=>{
try {
    const students=await studentModel.find()
    if(students.length>0) return res.status(200).json({message:"Students data",students})
        return res.status(500).json({message:'student is empty'})
} catch (error) {
    return res.status(500).json({message:"server error"})
}

}
