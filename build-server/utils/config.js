"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_BUILD_PATH = exports.PORT = exports.ISPRODUCTION = exports.port = exports.NODE_ENV = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.NODE_ENV = (_a = process.env, _b = _a.NODE_ENV, _b === void 0 ? "prod" : _b), exports.port = (_c = _a.port, _c === void 0 ? 3000 : _c);
var ISPRODUCTION = function () {
    console.log(exports.NODE_ENV);
    if (exports.NODE_ENV === "prod")
        return true;
    else
        return false;
};
exports.ISPRODUCTION = ISPRODUCTION;
exports.PORT = exports.port;
exports.CLIENT_BUILD_PATH = "".concat(__dirname, "/../../build");
