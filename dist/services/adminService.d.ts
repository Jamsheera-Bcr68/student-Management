import { IAdmin } from "../Model/adminModel";
import { IStudent } from "../Model/studentModel";
export declare class AdminService {
    login(email: string, password: string): Promise<IAdmin | null>;
    getAllStudents(): Promise<IStudent[]>;
    getStudent(studentId: string): Promise<IStudent | null>;
    editStudent(studentId: string, data: IStudent): Promise<IStudent | null>;
    deleteStudent(studentId: string): Promise<boolean>;
}
//# sourceMappingURL=adminService.d.ts.map