import express = require("express"); 
import { Request,Response } from "express";

const router=express.Router()
export const getLogin=async (req:Request,res:Response):Promise<void> =>{
    res.render("login")
}
export const postLogin=async (req:Request,res:Response):Promise<void> =>{
    console.log(req.body);
    
    res.render("userManagement")
}
exports={
    getLogin
}