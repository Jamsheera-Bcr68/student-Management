import express = require("express"); 
const router=express.Router()
import {AdminController} from "../controllers/adminController";
import { AdminService } from "../services/adminService";
import { isAdminLogged } from "../authMiddleware/authMiddlewere";

const adminService=new AdminService()
const adminController=new AdminController(adminService)
router.get('/login',((req,res)=>adminController.getLogin(req,res)))
router.post('/login',((req,res)=>adminController.postLogin(req,res)))
router.get('/studentManagement',isAdminLogged,((req,res)=>adminController.getStudentManagement(req,res)))
router.get('/getStudent/:studentId',((req,res)=>adminController.getStudent(req,res)))
router.patch('/editStudent/:studentId',((req,res)=>adminController.editStudent(req,res)))
router.delete('/deleteStudent/:studentId',((req,res)=>adminController.deleteStudent(req,res)))
router.post('/logout',((req,res)=>adminController.logout(req,res)))
export const adminRouter= router;