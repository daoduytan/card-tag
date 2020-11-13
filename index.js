"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var apollo_server_express_1 = require("apollo-server-express");
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var app_router_1 = require("./app-router");
var models_1 = __importDefault(require("./models"));
var schema_1 = require("./schema");
dotenv_1.default.config();
var app = express_1.default();
app.use(cookie_parser_1.default());
app.use(cors_1.default({
    origin: process.env.URL_CLIENT,
    credentials: true,
}));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
mongoose_1.default
    .connect(process.env.MONGODB_URL || "", {
    useNewUrlParser: true,
    useFindAndModify: true,
})
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    var schema, apolloServer, PORT;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, schema_1.createSchema()];
            case 1:
                schema = _a.sent();
                apolloServer = new apollo_server_express_1.ApolloServer({
                    schema: schema,
                    formatError: function (error) { return console.log(error); },
                    context: function (_a) {
                        var req = _a.req, res = _a.res;
                        return ({
                            req: req,
                            res: res,
                            models: models_1.default,
                        });
                    },
                    introspection: true,
                });
                apolloServer.applyMiddleware({ app: app });
                app_router_1.appRouter(app);
                PORT = process.env.PORT || 8080;
                app.listen(PORT, function () {
                    console.log("\uD83D\uDE80 Server ready at http://localhost:" + PORT + apolloServer.graphqlPath);
                });
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (err) {
    console.log("Not Connected to Database ERROR! ", err);
});
