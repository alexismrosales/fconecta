"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var BaseRouter = /** @class */ (function () {
    function BaseRouter() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    return BaseRouter;
}());
;
exports.default = BaseRouter;
