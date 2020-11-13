"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
var type_graphql_1 = require("type-graphql");
var resolvers_1 = require("../resolvers");
var createSchema = function () {
    return type_graphql_1.buildSchema({
        resolvers: [
            resolvers_1.SignupResolver,
            resolvers_1.RegisterResolver,
            resolvers_1.UsersrRegisterResolver,
            resolvers_1.UserResolver,
            resolvers_1.MeResolver,
            resolvers_1.LoginResolver,
            resolvers_1.AddAddressResolver,
            resolvers_1.ToggleVisibleResolver,
        ],
    });
};
exports.createSchema = createSchema;
