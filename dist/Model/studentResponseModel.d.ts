export interface StudentResponse {
    id: number;
    name?: string;
    email: string;
    age?: number;
    course?: string;
    phone?: number;
    isDeleted?: boolean;
}
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: any;
    message?: string;
}
//# sourceMappingURL=studentResponseModel.d.ts.map