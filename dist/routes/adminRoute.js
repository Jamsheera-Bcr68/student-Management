"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express = require("express");
const router = express.Router();
const adminController_1 = require("../controllers/adminController");
const adminService_1 = require("../services/adminService");
const authMiddlewere_1 = require("../authMiddleware/authMiddlewere");
const adminService = new adminService_1.AdminService();
const adminController = new adminController_1.AdminController(adminService);
router.get('/login', ((req, res) => adminController.getLogin(req, res)));
router.post('/login', ((req, res) => adminController.postLogin(req, res)));
router.get('/studentManagement', authMiddlewere_1.isAdminLogged, ((req, res) => adminController.getStudentManagement(req, res)));
router.get('/getStudent/:studentId', ((req, res) => adminController.getStudent(req, res)));
router.patch('/editStudent/:studentId', ((req, res) => adminController.editStudent(req, res)));
router.delete('/deleteStudent/:studentId', ((req, res) => adminController.deleteStudent(req, res)));
router.post('/logout', ((req, res) => adminController.logout(req, res)));
exports.adminRouter = router;
//# sourceMappingURL=adminRoute.js.map