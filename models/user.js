"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var mongoose_1 = require("mongoose");
var util_1 = require("./util");
var UserSchema = new mongoose_1.Schema({
    fullname: { type: String, required: true },
    username: { type: String, trim: true, lowercase: true, unique: true },
    avatar: { type: String },
    email: { type: String, lowercase: true, default: "" },
    address: { type: String, default: "" },
    phoneNumber: { type: String, default: "" },
    passwordHash: { type: String },
    type: { type: String, enum: ["user", "customer"], default: "user" },
    list: [
        {
            no: { type: Number, required: true },
            name: { type: String, required: true },
            address: { type: String, required: true },
            visible: { type: Boolean, default: true },
        },
    ],
}, {
    timestamps: true,
});
// set hash password
UserSchema.methods.setPassword = function setPassword(password) {
    this.passwordHash = util_1.getPasswordHash(password);
};
// check valid password
UserSchema.methods.isValidPassword = function isValidPassword(password) {
    return util_1.comparePassword(password, this.password_hash);
};
UserSchema.methods.generalRefreshToken = function generalRefreshToken() {
    return jsonwebtoken_1.default.sign({
        id: this._id,
    }, process.env.SECRET_REFRESH || "", {
        expiresIn: "7d",
    });
};
UserSchema.methods.generalToken = function generalToken() {
    return jsonwebtoken_1.default.sign({
        id: this._id,
    }, process.env.SECRET_KEY || "", { expiresIn: "20s" });
};
UserSchema.methods.userToJson = function userToJson() {
    return {
        _id: this._id,
        fullname: this.fullname,
        username: this.username,
        address: this.address,
        email: this.email,
        type: this.type,
        phoneNumber: this.phoneNumber,
        list: this.list,
        token: this.generalToken(),
        refreshToken: this.generalRefreshToken(),
    };
};
var User = mongoose_1.model("User", UserSchema);
exports.default = User;
