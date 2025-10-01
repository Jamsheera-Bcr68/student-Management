"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const adminModel_1 = require("../Model/adminModel");
const studentModel_1 = require("../Model/studentModel");
class AdminService {
    async login(email, password) {
        const admin = await adminModel_1.adminModel.findOne({ email, password });
        console.log('admin ', admin);
        return admin;
    }
    async getAllStudents() {
        const students = await studentModel_1.studentModel.find();
        return students;
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=adminService.js.map