"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStudent = exports.AdminController = void 0;
const express = require("express");
const studentModel_1 = require("../Model/studentModel");
const router = express.Router();
class AdminController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    async getLogin(req, res) {
        res.render("login");
    }
    async postLogin(req, res) {
        try {
            const { email, password } = req.body;
            console.log(req.body);
            const admin = await this.adminService.login(email, password);
            console.log('admin ', admin);
            if (admin) {
                return res.status(200).json({ success: true, message: 'Login Successfull' });
            }
            else
                return res.status(500).json({ success: false, message: 'Invalid Credentials' });
        }
        catch (error) {
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }
    async getStudentManagement(req, res) {
        console.log('from getStudentMangement');
        const students = await this.adminService.getAllStudents();
        console.log('students', students);
        res.render('studentManagement', { students });
    }
}
exports.AdminController = AdminController;
const getAllStudent = async (req, res) => {
    try {
        const students = await studentModel_1.studentModel.find();
        if (students.length > 0)
            return res.status(200).json({ message: "Students data", students });
        return res.status(500).json({ message: 'student is empty' });
    }
    catch (error) {
        return res.status(500).json({ message: "server error" });
    }
};
exports.getAllStudent = getAllStudent;
//# sourceMappingURL=adminController.js.map