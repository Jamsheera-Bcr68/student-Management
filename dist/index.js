"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express,{Express,Request,Response} from "express";
const express = require("express");
const path = require("path");
const adminRoute_1 = require("./routes/adminRoute");
const app = express();
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
app.listen(port, () => {
    console.log('server listening at 7000');
});
//# sourceMappingURL=index.js.map