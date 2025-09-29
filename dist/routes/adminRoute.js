"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express = require("express");
const router = express.Router();
const adminController_1 = require("../controllers/adminController");
const adminController_2 = require("../controllers/adminController");
router.get('/login', adminController_1.getLogin);
router.post('/login', adminController_2.postLogin);
exports.adminRouter = router;
//# sourceMappingURL=adminRoute.js.map