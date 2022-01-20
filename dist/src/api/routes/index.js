"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("./auth"));
const user_1 = __importDefault(require("./user"));
const routes = ({ app, router }) => {
    const authRouter = (0, auth_1.default)(router);
    const userRouter = (0, user_1.default)(router);
    app.use(authRouter);
    app.use(userRouter);
};
exports.default = routes;
//# sourceMappingURL=index.js.map