"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = exports.getLogin = void 0;
const express = require("express");
const router = express.Router();
const getLogin = async (req, res) => {
    res.render("login");
};
exports.getLogin = getLogin;
const postLogin = async (req, res) => {
    console.log(req.body);
    res.render("userManagement");
};
exports.postLogin = postLogin;
exports = {
    getLogin: exports.getLogin
};
//# sourceMappingURL=adminController.js.map