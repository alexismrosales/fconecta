"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
var getUsers = function (req, res) {
    // Lógica para obtener usuarios (por ejemplo, desde una base de datos)
    var users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ];
    res.status(200).json(users);
};
exports.getUsers = getUsers;
