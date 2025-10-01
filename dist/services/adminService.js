"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const adminModel_1 = require("../Model/adminModel");
const studentModel_1 = require("../Model/studentModel");
class AdminService {
    async login(email, password) {
        const admin = await adminModel_1.adminModel.findOne({ email, password });
        return admin;
    }
    async getAllStudents() {
        const students = await studentModel_1.studentModel.find({ isDeleted: false });
        // console.log(students);
        return students;
    }
    async getStudent(studentId) {
        const student = await studentModel_1.studentModel.findOne({ _id: new mongoose_1.default.Types.ObjectId(studentId) });
        return student;
    }
    async editStudent(studentId, data) {
        console.log('from service ', data);
        const student = await studentModel_1.studentModel.findByIdAndUpdate(studentId, {
            $set: {
                name: data.name,
                age: data.age,
                email: data.email,
                phone: data.phone,
                course: data.course
            }
        }, { new: true });
        console.log('studentt updaterd and retudne', student);
        return student;
    }
    async deleteStudent(studentId) {
        let student = await studentModel_1.studentModel.findOne({ _id: new mongoose_1.default.Types.ObjectId(studentId) });
        if (!student) {
            throw Error('student not found');
        }
        else if (student.isDeleted) {
            throw Error("already deleted");
        }
        else {
            student.isDeleted = true;
            await student.save();
            return true;
        }
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=adminService.js.map