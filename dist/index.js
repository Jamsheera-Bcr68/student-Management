"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express,{Express,Request,Response} from "express";
const express = require("express");
const path = require("path");
const adminRoute_1 = require("./routes/adminRoute");
const studentRoute_1 = require("./routes/studentRoute");
const express_session_1 = __importDefault(require("express-session"));
const connectdb_1 = require("./config/connectdb");
(0, connectdb_1.dbConnect)();
const app = express();
app.use((0, express_session_1.default)({
    resave: true,
    saveUninitialized: true,
    secret: 'admin'
}));
app.use(express.static('public'));
const port = 7000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('hello from Usermanagement');
});
app.use('/admin', adminRoute_1.adminRouter);
app.use('/student', studentRoute_1.studentRouter);
app.listen(port, () => {
    console.log('server listening at 7000');
});
//# sourceMappingURL=index.js.map