export interface CreateStudentRequest {
    id: number;
    name?: string;
    email: string;
    password: number;
    age?: number;
    course?: string;
    phone?: number;
    isDeleted?: boolean;
}
export interface UpdateStudentRequest {
    id: number;
    name?: string;
    email: string;
    password?: number;
    age?: number;
    course?: string;
    phone?: number;
}
//# sourceMappingURL=studentRequestModel.d.ts.map