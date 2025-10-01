"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express,{Express,Request,Response} from "express";
var express = require("express");
var path = require("path");
var adminRoute_1 = require("./routes/adminRoute");
var express_session_1 = require("express-session");
var app = express();
app.use((0, express_session_1.default)({
    resave: true,
    saveUninitialized: true,
    secret: 'admin'
}));
app.use(express.static('public'));
var port = 7000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send('hello from Usermanagement');
});
app.use('/admin', adminRoute_1.adminRouter);
app.listen(port, function () {
    console.log('server listening at 7000');
});
