"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async getRegister(req, res) {
        if (!req.session.student) {
            res.render('studentSignup');
        }
    }
    async getLogin(req, res) {
        if (!req.session.student) {
            res.render('studentLogin');
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body;
            console.log('from student login', req.body);
            const student = await this.authService.login(email, password);
            if (student) {
                req.session.student = student;
                return res.status(200).json({ success: true, message: 'Login Success ful' });
            }
            else {
                return res.status(500).json({ success: false, message: 'Invalid Credentials' });
            }
        }
        catch {
            return res.status(500).json({ success: false, message: 'Server Error' });
        }
    }
    async register(req, res) {
        try {
            const student = await this.authService.register(req.body);
            console.log('student is ', student);
            if (student) {
                req.session.student = student;
                return res.status(200).json({ success: true, message: 'Signup Success full' });
            }
            else {
                return res.status(500).json({ success: false, message: 'student not found' });
            }
        }
        catch (error) {
            res.status(500).json({ message: error.message || 'server errror' });
        }
    }
    async getHome(req, res) {
        res.render('home');
    }
    async logout(req, res) {
        console.log('from student logout');
        req.session.destroy(err => {
            if (err) {
                return res.json({ success: false, message: "Error in logout" });
            }
            else {
                return res.status(200).json({ success: true, message: "Student logout successful" });
            }
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map