import express = require("express");
import { Request, Response } from "express";
import { AdminService } from "../services/adminService";
export declare class AdminController {
    private adminService;
    constructor(adminService: AdminService);
    getLogin(req: Request, res: Response): Promise<void>;
    postLogin(req: Request, res: Response): Promise<express.Response<any, Record<string, any>>>;
    getStudentManagement(req: Request, res: Response): Promise<void>;
    getStudent(req: Request, res: Response): Promise<express.Response<any, Record<string, any>>>;
    editStudent(req: Request, res: Response): Promise<express.Response<any, Record<string, any>> | undefined>;
    deleteStudent(req: Request, res: Response): Promise<express.Response<any, Record<string, any>> | undefined>;
    logout(req: Request, res: Response): Promise<void>;
}
export declare const getAllStudent: express.RequestHandler;
//# sourceMappingURL=adminController.d.ts.map