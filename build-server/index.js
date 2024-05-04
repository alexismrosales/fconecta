"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var config_1 = require("./utils/config");
var cors_1 = __importDefault(require("./utils/cors"));
var Server = /** @class */ (function () {
    function Server() {
        this.port = config_1.PORT;
        this.application = (0, express_1.default)();
    }
    Server.prototype.performPlugins = function () {
        this.application.use(express_1.default.urlencoded({ extended: true }));
        this.application.use(express_1.default.json());
        this.application.use((0, cors_1.default)());
        this.application.use(routes_1.default);
    };
    Server.prototype.run = function () {
        var _this = this;
        try {
            // Executing CORS config and Express config
            this.performPlugins();
            // Listening ...
            this.application.listen(this.port, function () {
                console.log("Server running on: ", _this.port);
            });
        }
        catch (error) {
            console.log(error);
            process.exit(1);
        }
    };
    return Server;
}());
exports.default = Server;
new Server().run();
