import { Request,Response,NextFunction } from "express";

// export function isStudentLoggedIn(req:Request,res:Response,next:NextFunction){
//     if(req.session.student){
//         return next
//     }else{
//           return res.status(401).json({ success: false, message: "Please login first" })
//     }
// }