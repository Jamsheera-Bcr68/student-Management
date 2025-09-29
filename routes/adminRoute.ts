import express = require("express"); 
const router=express.Router()
import { getLogin } from "../controllers/adminController";
import { postLogin } from "../controllers/adminController";
router.get('/login',getLogin)
router.post('/login',postLogin)

export const adminRouter= router;