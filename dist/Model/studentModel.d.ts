import mongoose from "mongoose";
export interface IStudent {
    id: number;
    password?: number;
    email: string;
    age?: number;
    course?: string;
    name?: string;
    phone?: number;
    isDeleted?: boolean;
}
export declare const studentModel: mongoose.Model<IStudent, {}, {}, {}, mongoose.Document<unknown, {}, IStudent, {}, {}> & IStudent & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=studentModel.d.ts.map