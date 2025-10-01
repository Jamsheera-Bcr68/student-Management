"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = require("mongoose");
const url = 'mongodb://localhost:27017/studentsDB';
const dbConnect = async () => {
    try {
        await (0, mongoose_1.connect)('mongodb://localhost:27017/studentsDB').then(() => {
            console.log('DB connected successfully');
        });
    }
    catch (error) {
        console.log('Database Error:', error);
    }
};
exports.dbConnect = dbConnect;
//# sourceMappingURL=connectdb.js.map