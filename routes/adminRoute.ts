import express = require("express"); 
const router=express.Router()
import {AdminController} from "../controllers/adminController";
import { AdminService } from "../services/adminService";

const adminService=new AdminService()
const adminController=new AdminController(adminService)
router.get('/login',((req,res)=>adminController.getLogin(req,res)))
router.post('/login',((req,res)=>adminController.postLogin(req,res)))
router.get('/studentManagement',((req,res)=>adminController.getStudentManagement(req,res)))
export const adminRouter= router;