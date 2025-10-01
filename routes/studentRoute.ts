import express from "express";
import { AuthController } from "../controllers/authController";
import { AuthService } from "../services/authServices";

const router=express.Router()

const authService  =new AuthService()
const authController=new AuthController(authService)


router.get('/signup',((req,res)=>authController.getRegister(req,res)))
router.get('/login',((req,res)=>authController.getLogin(req,res)))
router.post('/login',((req,res)=>authController.login(req,res)))
router.post('/register',((req,res)=>authController.register(req,res)))

router.get('/home',((req,res)=>authController.getHome(req,res)))

export const studentRouter=router 