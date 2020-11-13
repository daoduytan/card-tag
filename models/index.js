"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterModel = exports.UserModel = void 0;
var user_1 = __importDefault(require("./user"));
exports.UserModel = user_1.default;
var user_register_1 = __importDefault(require("./user-register"));
exports.UserRegisterModel = user_register_1.default;
exports.default = {
    UserModel: user_1.default,
    UserRegisterModel: user_register_1.default,
};
