"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserRegisterSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    code: { type: String, required: true },
    status: { type: Boolean, default: false },
}, {
    timestamps: true,
});
UserRegisterSchema.methods.userRegisterToJson = function userRegisterToJson() {
    return {
        _id: this._id,
        name: this.name,
        code: this.code,
        email: this.email,
        address: this.address,
        status: this.status,
        phoneNumber: this.phoneNumber,
    };
};
var UserRegister = mongoose_1.model("UserRegister", UserRegisterSchema);
exports.default = UserRegister;
