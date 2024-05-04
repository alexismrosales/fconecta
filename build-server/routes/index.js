"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var config_1 = require("../utils/config");
var api_1 = __importDefault(require("./api"));
var router_1 = __importDefault(require("./router"));
var Routes = /** @class */ (function (_super) {
    __extends(Routes, _super);
    function Routes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseRoute = '/';
        return _this;
    }
    Routes.prototype.routes = function () {
        this.router.use(api_1.default.baseRoute, api_1.default.router);
        console.log(api_1.default.baseRoute);
        if ((0, config_1.ISPRODUCTION)()) {
            this.router.use(express_1.default.static(config_1.CLIENT_BUILD_PATH));
            this.router.use('*', function (_, res) {
                res.status(404).sendFile(path_1.default.resolve(config_1.CLIENT_BUILD_PATH));
            });
        }
    };
    return Routes;
}(router_1.default));
exports.default = new Routes().router;
