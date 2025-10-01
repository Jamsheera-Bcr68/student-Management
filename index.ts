//import express,{Express,Request,Response} from "express";
import express = require("express"); 
import type { Express, Request, Response } from "express";
import path = require("path");
import {adminRouter} from './routes/adminRoute'
import { studentRouter } from "./routes/studentRoute";
import  session  from "express-session";
import { dbConnect } from "./config/connectdb";
import nocache = require("nocache");

dbConnect()
const app=express()
app.use(nocache())
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'admin'
}))
app.use(express.static('public'))
const port:number=7000

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'..','views'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req:Request,res:Response)=>{
    res.send('hello from Usermanagement')
})

app.use('/admin',adminRouter)
app.use('/student',studentRouter)
app.listen(port,()=>{
    console.log('server listening at 7000');
    
})