"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = exports.validDomains = void 0;
var cors_1 = __importDefault(require("cors"));
var config_1 = require("./config");
var PROD_Origins = [
    // List of all valid origins for PRODUCTION state
    "*"
];
var DEV_Origins = [
    // List of all valid origins for DEV state 
    "http://localhost:3000/",
    "http://localhost:8080/",
    "*"
];
exports.validDomains = (0, config_1.ISPRODUCTION)() ? PROD_Origins : DEV_Origins;
exports.corsOptions = {
    origin: function (origin, callback) {
        if (!origin || exports.validDomains.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Origin access request is not registered on valid domains"));
        }
    }
};
var corsInstance = function () { return (0, cors_1.default)(__assign({}, exports.corsOptions)); };
exports.default = corsInstance;
