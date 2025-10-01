"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express = require("express");
const router = express.Router();
const adminController_1 = require("../controllers/adminController");
const adminService_1 = require("../services/adminService");
const adminService = new adminService_1.AdminService();
const adminController = new adminController_1.AdminController(adminService);
router.get('/login', ((req, res) => adminController.getLogin(req, res)));
router.post('/login', ((req, res) => adminController.postLogin(req, res)));
router.get('/studentManagement', ((req, res) => adminController.getStudentManagement(req, res)));
exports.adminRouter = router;
//# sourceMappingURL=adminRoute.js.map