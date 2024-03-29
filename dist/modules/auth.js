"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = exports.creatJWT = exports.hashPassword = exports.comparePassword = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var comparePassword = function (password, hash) {
    return bcrypt_1.default.compare(password, hash);
};
exports.comparePassword = comparePassword;
var hashPassword = function (password) {
    return bcrypt_1.default.hash(password, 5);
};
exports.hashPassword = hashPassword;
var creatJWT = function (user) {
    var token = jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    return token;
};
exports.creatJWT = creatJWT;
var protect = function (req, res, next) {
    var bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401);
        res.json({ message: 'no token yet' });
        return;
    }
    var _a = bearer.split(' '), token = _a[1];
    if (!token) {
        res.status(401);
        res.json({ message: 'no token yet' });
        return;
    }
    try {
        var user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    }
    catch (e) {
        res.status(401);
        res.json({ message: 'wrong token::', e: e });
        return;
    }
};
exports.protect = protect;
//# sourceMappingURL=auth.js.map