"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesHome = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.categoriesHome = connect_1.default.define('ff_categories', {
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
}, {
    timestamps: false
});
//# sourceMappingURL=categories.js.map