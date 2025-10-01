import { Request,Response,NextFunction } from "express";

export function isAdminLogged(req:Request,res:Response,next:NextFunction){
    if(req.session.admin){
        console.log(req.session);
        
        
        return next()
  }else{
      res.redirect('login')
  }
 }
 export function isStudentLogged(req:Request,res:Response,next:NextFunction){
    if(req.session.student){
        
        return next()
  }else{
      res.redirect('login')
  }
 }