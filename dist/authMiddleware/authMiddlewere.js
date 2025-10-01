"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminLogged = isAdminLogged;
exports.isStudentLogged = isStudentLogged;
function isAdminLogged(req, res, next) {
    if (req.session.admin) {
        console.log(req.session);
        return next();
    }
    else {
        res.redirect('login');
    }
}
function isStudentLogged(req, res, next) {
    if (req.session.student) {
        return next();
    }
    else {
        res.redirect('login');
    }
}
//# sourceMappingURL=authMiddlewere.js.map