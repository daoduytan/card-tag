"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupResolver = void 0;
var type_graphql_1 = require("type-graphql");
var models_1 = require("../../models");
var utils_1 = require("../../utils");
var type_1 = require("./type");
var SignupResolver = /** @class */ (function () {
    function SignupResolver() {
    }
    SignupResolver.prototype.signup = function (fullname, username, email, phoneNumber, address, code, password, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var userExistCode, userExist, newUser, userSave, user, res, token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        if (!fullname ||
                            !username ||
                            !password ||
                            !email ||
                            !phoneNumber ||
                            !address ||
                            !code ||
                            !password) {
                            throw new Error("Body not valid");
                        }
                        return [4 /*yield*/, models_1.UserRegisterModel.findOne({
                                code: code,
                                status: false,
                            })];
                    case 1:
                        userExistCode = _a.sent();
                        if (!userExistCode) {
                            throw new Error("Code not valid");
                        }
                        return [4 /*yield*/, models_1.UserModel.findOne({ username: username })];
                    case 2:
                        userExist = _a.sent();
                        if (userExist) {
                            throw new Error("User exist");
                        }
                        newUser = new models_1.UserModel({
                            fullname: fullname,
                            username: username,
                            email: email,
                            phoneNumber: phoneNumber,
                            address: address,
                        });
                        return [4 /*yield*/, newUser.setPassword(password)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, newUser.save()];
                    case 4:
                        userSave = _a.sent();
                        if (!userSave) return [3 /*break*/, 6];
                        return [4 /*yield*/, models_1.UserRegisterModel.findOneAndUpdate({
                                code: code,
                                status: false,
                            }, { status: true })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        user = userSave.userToJson();
                        res = ctx.res;
                        token = user.refreshToken;
                        utils_1.sendRefreshToken(res, token);
                        return [2 /*return*/, user];
                    case 7:
                        error_1 = _a.sent();
                        console.log("error", error_1);
                        throw new Error("Error handing");
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        type_graphql_1.Mutation(function () { return type_1.User; }),
        __param(0, type_graphql_1.Arg("fullname")),
        __param(1, type_graphql_1.Arg("username")),
        __param(2, type_graphql_1.Arg("email")),
        __param(3, type_graphql_1.Arg("phoneNumber")),
        __param(4, type_graphql_1.Arg("address")),
        __param(5, type_graphql_1.Arg("code")),
        __param(6, type_graphql_1.Arg("password")),
        __param(7, type_graphql_1.Ctx()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String, String, String, String, Object]),
        __metadata("design:returntype", Promise)
    ], SignupResolver.prototype, "signup", null);
    SignupResolver = __decorate([
        type_graphql_1.Resolver()
    ], SignupResolver);
    return SignupResolver;
}());
exports.SignupResolver = SignupResolver;
