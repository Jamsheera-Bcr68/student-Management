"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authServices_1 = require("../services/authServices");
const authMiddlewere_1 = require("../authMiddleware/authMiddlewere");
const router = express_1.default.Router();
const authService = new authServices_1.AuthService();
const authController = new authController_1.AuthController(authService);
router.get('/signup', ((req, res) => authController.getRegister(req, res)));
router.get('/login', ((req, res) => authController.getLogin(req, res)));
router.post('/login', ((req, res) => authController.login(req, res)));
router.post('/register', ((req, res) => authController.register(req, res)));
router.get('/home', authMiddlewere_1.isStudentLogged, ((req, res) => authController.getHome(req, res)));
router.post('/logout', ((req, res) => authController.logout(req, res)));
exports.studentRouter = router;
//# sourceMappingURL=studentRoute.js.map