"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCodeRegister = exports.comparePassword = exports.getPasswordHash = exports.salt = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
var genSaltSync = bcrypt_1.default.genSaltSync, hashSync = bcrypt_1.default.hashSync, compareSync = bcrypt_1.default.compareSync;
var salt = genSaltSync(10) || 10;
exports.salt = salt;
var getPasswordHash = function (password) { return hashSync(password, salt); };
exports.getPasswordHash = getPasswordHash;
var comparePassword = function (password, passwordHash) {
    return compareSync(password, passwordHash);
};
exports.comparePassword = comparePassword;
var getCodeRegister = function () { return Math.random().toString(32).substring(7); };
exports.getCodeRegister = getCodeRegister;
