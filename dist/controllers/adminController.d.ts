import express = require("express");
import { Request, Response } from "express";
import { AdminService } from "../services/adminService";
import { AdminLoginRequest } from "../Model/adminRequestModel";
import { AdminResponse } from "../Model/adminResponseModel";
import { ApiResponse, StudentResponse } from "../Model/studentResponseModel";
import { UpdateStudentRequest } from "../Model/studentRequestModel";
interface TypedRequest<T> extends Request {
    body: T;
}
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    getLogin(req: Request, res: Response): Promise<void>;
    postLogin(req: TypedRequest<AdminLoginRequest>, res: Response<ApiResponse<AdminResponse>>): Promise<express.Response<ApiResponse<AdminResponse>, Record<string, any>>>;
    getStudentManagement(req: Request, res: Response): Promise<void>;
    getStudent(req: Request, res: Response): Promise<express.Response<any, Record<string, any>>>;
    editStudent(req: TypedRequest<UpdateStudentRequest>, res: Response<ApiResponse<StudentResponse>>): Promise<express.Response<ApiResponse<StudentResponse>, Record<string, any>> | undefined>;
    deleteStudent(req: Request, res: Response): Promise<express.Response<any, Record<string, any>> | undefined>;
    logout(req: Request, res: Response): Promise<void>;
}
export declare const getAllStudent: express.RequestHandler;
export {};
//# sourceMappingURL=adminController.d.ts.map