"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var morgan_1 = __importDefault(require("morgan"));
var auth_1 = require("./modules/auth");
var user_1 = require("./handlers/user");
var app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.get('/test',(req,res)=>{
//     console.log("express server up");
//     res.status(200);
//     res.json ({message: 'json hello'});
//     res.send("hello to this verse");
// });
app.get('/', function (req, res, next) {
    res.json({ message: 'hello me' });
});
app.use('/api', auth_1.protect, router_1.default);
app.post('/user', user_1.createNewUser);
app.post('/signin', user_1.signin);
app.use(function (err, req, res, next) {
    if (err.type === 'auth') {
        res.status(400).json({ message: 'auth error' });
    }
    if (err.type === 'input') {
        res.status(401).json({ message: 'input error' });
    }
    else {
        res.json({ message: "error thrown ".concat(err.message) });
    }
});
exports.default = app;
//# sourceMappingURL=server.js.map