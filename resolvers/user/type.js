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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegister = exports.User = void 0;
var type_graphql_1 = require("type-graphql");
var ListItem = /** @class */ (function () {
    function ListItem() {
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; }),
        __metadata("design:type", String)
    ], ListItem.prototype, "_id", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", Number)
    ], ListItem.prototype, "no", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], ListItem.prototype, "name", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], ListItem.prototype, "address", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", Boolean)
    ], ListItem.prototype, "visible", void 0);
    ListItem = __decorate([
        type_graphql_1.ObjectType()
    ], ListItem);
    return ListItem;
}());
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; }),
        __metadata("design:type", String)
    ], User.prototype, "_id", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], User.prototype, "fullname", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], User.prototype, "phoneNumber", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], User.prototype, "address", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], User.prototype, "type", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], User.prototype, "token", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], User.prototype, "refreshToken", void 0);
    __decorate([
        type_graphql_1.Field(function () { return [ListItem]; }),
        __metadata("design:type", Array)
    ], User.prototype, "list", void 0);
    User = __decorate([
        type_graphql_1.ObjectType()
    ], User);
    return User;
}());
exports.User = User;
var UserRegister = /** @class */ (function () {
    function UserRegister() {
    }
    __decorate([
        type_graphql_1.Field(function (type) { return type_graphql_1.ID; }),
        __metadata("design:type", String)
    ], UserRegister.prototype, "_id", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UserRegister.prototype, "name", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UserRegister.prototype, "phoneNumber", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UserRegister.prototype, "address", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UserRegister.prototype, "email", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UserRegister.prototype, "code", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", Boolean)
    ], UserRegister.prototype, "status", void 0);
    UserRegister = __decorate([
        type_graphql_1.ObjectType()
    ], UserRegister);
    return UserRegister;
}());
exports.UserRegister = UserRegister;
