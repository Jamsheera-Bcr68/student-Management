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
        if (!req.session.admin) {
            res.render("login");
        }
    }
    async postLogin(req, res) {
        try {
            const { email, password } = req.body;
            //console.log(req.body);
            const admin = await this.adminService.login(email, password);
            //console.log('admin ', admin);
            if (admin) {
                req.session.admin = admin;
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
        //  console.log('from getStudentMangement');
        const students = await this.adminService.getAllStudents();
        // console.log('students', students);
        res.render('studentManagement', { students });
    }
    async getStudent(req, res) {
        try {
            let studentId = req.params.studentId;
            if (!studentId) {
                return res.status(300).json({ success: false, message: 'Student Id is not found' });
            }
            const student = await this.adminService.getStudent(studentId);
            if (student) {
                return res.status(200).json({ success: true, student });
            }
            else {
                throw Error('Student not found');
            }
        }
        catch (error) {
            return res.status(500).json({ success: false, message: error.message || 'server error' });
        }
    }
    async editStudent(req, res) {
        try {
            console.log('from admin controll edit stusnt');
            let studentId = req.params.studentId;
            console.log('studentId', studentId);
            let data = req.body;
            console.log('data', data);
            if (studentId) {
                let student = await this.adminService.editStudent(studentId, data);
                if (student) {
                    return res.status(200).json({ success: true, message: 'student updated success fully', student });
                }
            }
            else {
                console.log('Student  id is not found');
                throw Error("Student  id is not found");
            }
        }
        catch (error) {
        }
    }
    async deleteStudent(req, res) {
        try {
            let studentId = req.params.studentId;
            if (!studentId) {
                throw Error('student id id not found');
            }
            let isDeleted = await this.adminService.deleteStudent(studentId);
            if (isDeleted) {
                return res.status(200).json({ success: true, message: 'Student deleted succedd fully' });
            }
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message || 'Server Error' });
        }
    }
    async logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                console.log(' error in destroying seession', err);
                return res.json({ success: false, message: 'error in destroying seession' });
            }
            else {
                return res.status(200).json({ success: true, message: 'Admin logout successfull' });
            }
        });
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