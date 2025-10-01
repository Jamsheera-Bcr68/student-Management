import mongoose from "mongoose";
export interface IAdmin {
    name?: string;
    password: string;
    email: string;
}
export declare const adminModel: mongoose.Model<IAdmin, {}, {}, {}, mongoose.Document<unknown, {}, IAdmin, {}, mongoose.DefaultSchemaOptions> & IAdmin & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<IAdmin, mongoose.Model<IAdmin, any, any, any, mongoose.Document<unknown, any, IAdmin, any, {}> & IAdmin & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IAdmin, mongoose.Document<unknown, {}, mongoose.FlatRecord<IAdmin>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<IAdmin> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=adminModel.d.ts.map