"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDetails = exports.productImageUrls = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const connect_1 = __importDefault(require("../db/connect"));
exports.productImageUrls = connect_1.default.define('ff_product_images', {
    id: {
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING
    },
    productCode: {
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl1: {
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl2: {
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl3: {
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl4: {
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl5: {
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl6: {
        type: sequelize_typescript_1.DataType.STRING
    },
    imageUrl7: {
        type: sequelize_typescript_1.DataType.STRING
    },
});
exports.productDetails = connect_1.default.define('ff_products', {
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
    description: {
        type: sequelize_typescript_1.DataType.STRING
    },
    longDescription: {
        type: sequelize_typescript_1.DataType.STRING
    },
    isOffer: {
        type: sequelize_typescript_1.DataType.BOOLEAN
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
}, {
    timestamps: false
});
//# sourceMappingURL=productDetail.js.map