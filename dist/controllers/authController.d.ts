import { Request, Response } from "express";
import { AuthService } from "../services/authServices";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getRegister(req: Request, res: Response): Promise<void>;
    getLogin(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    register(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    getHome(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=authController.d.ts.map