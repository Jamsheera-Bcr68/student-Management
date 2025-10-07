import { Request, Response } from "express";
import { AuthService } from "../services/authServices";
import { CreateStudentRequest } from "../Model/studentRequestModel";
import { ApiResponse, StudentResponse } from "../Model/studentResponseModel";
interface TypedRequest<T> extends Request {
    body: T;
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getRegister(req: Request, res: Response): Promise<void>;
    getLogin(req: Request, res: Response): Promise<void>;
    login(req: TypedRequest<CreateStudentRequest>, res: Response<ApiResponse<StudentResponse>>): Promise<Response<ApiResponse<StudentResponse>, Record<string, any>>>;
    register(req: TypedRequest<CreateStudentRequest>, res: Response<ApiResponse<StudentResponse>>): Promise<Response<ApiResponse<StudentResponse>, Record<string, any>> | undefined>;
    getHome(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
}
export {};
//# sourceMappingURL=authController.d.ts.map