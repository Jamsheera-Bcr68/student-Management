"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const studentModel_1 = require("../Model/studentModel");
class AuthService {
    async login(email, password) {
        const student = await studentModel_1.studentModel.findOne({ email, password }).exec();
        return student;
    }
    async register(student) {
        const studentExist = await studentModel_1.studentModel.findOne({ email: student.email });
        if (studentExist) {
            console.log('existing student', studentExist);
            throw Error('Student is already existing');
        }
        const newStudent = new studentModel_1.studentModel(student);
        await newStudent.save();
        console.log('Student saved ');
        return newStudent;
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=authServices.js.map