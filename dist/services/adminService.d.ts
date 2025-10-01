import { IAdmin } from "../Model/adminModel";
import { IStudent } from "../Model/studentModel";
export declare class AdminService {
    login(email: string, password: string): Promise<IAdmin | null>;
    getAllStudents(): Promise<IStudent[]>;
}
//# sourceMappingURL=adminService.d.ts.map