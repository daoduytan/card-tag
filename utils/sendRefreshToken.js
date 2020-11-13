"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefreshToken = void 0;
var sendRefreshToken = function (res, token) {
    res.cookie("refresh_token", token, {
        httpOnly: true,
        path: "/refresh_token",
    });
};
exports.sendRefreshToken = sendRefreshToken;
