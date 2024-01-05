"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminProducts = exports.adminCategory = exports.sectionsHome = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.sectionsHome = connect_1.default.define('ff_sections', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl: {
        type: sequelize_typescript_1.DataType.STRING
    },
}, {
    timestamps: false
});
exports.adminCategory = connect_1.default.define('ff_categories', {
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    sectionID: {
        type: sequelize_typescript_1.DataType.NUMBER
    },
    description: {
        type: sequelize_typescript_1.DataType.STRING
    },
}, {
    timestamps: false
});
exports.adminProducts = connect_1.default.define('ff_products', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl: {
        type: sequelize_typescript_1.DataType.STRING
    },
    name: {
        type: sequelize_typescript_1.DataType.STRING
    },
    code: {
        type: sequelize_typescript_1.DataType.STRING
    },
    type: {
        type: sequelize_typescript_1.DataType.STRING
    },
    byWeight: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    weightPerUnit: {
        type: sequelize_typescript_1.DataType.FLOAT
    },
    weightPerBox: {
        type: sequelize_typescript_1.DataType.FLOAT,
    },
    byUnit: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    unitQty: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
    unitPerBox: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
    description: {
        type: sequelize_typescript_1.DataType.STRING
    },
    isOffer: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    isFree: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    isOutStock: {
        type: sequelize_typescript_1.DataType.BOOLEAN
    },
    discount: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
    categoryID: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
    sectionID: {
        type: sequelize_typescript_1.DataType.INTEGER
    },
    price: {
        type: sequelize_typescript_1.DataType.DECIMAL
    },
});
//# sourceMappingURL=admin.js.map