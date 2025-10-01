"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const studentSchema = new mongoose_1.default.Schema({
    id: { type: Number },
    name: { type: String },
    email: { type: String, required: true },
    age: { type: Number },
    course: { type: String },
    password: { type: Number, required: true },
    phone: { type: Number },
    isDeleted: { type: Boolean, default: false }
});
exports.studentModel = mongoose_1.default.model('Student', studentSchema);
//# sourceMappingURL=studentModel.js.map