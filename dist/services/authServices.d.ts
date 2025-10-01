import { IStudent } from '../Model/studentModel';
export declare class AuthService {
    login(email: string, password: string): Promise<IStudent | null>;
    register(student: IStudent): Promise<IStudent>;
}
//# sourceMappingURL=authServices.d.ts.map