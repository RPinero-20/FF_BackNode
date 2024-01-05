"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = __importDefault(require("../controllers/home"));
const dbConnection_1 = require("../db/dbConnection");
const productDetail_1 = __importDefault(require("../controllers/productDetail"));
const clientRouter = (0, express_1.Router)();
const homeUrl = '/home';
const productDetail = '/productDetail';
clientRouter.use((_req, _res, next) => {
    (0, dbConnection_1.conectToDB)();
    next();
});
clientRouter.get(homeUrl, home_1.default);
clientRouter.get(productDetail, productDetail_1.default);
exports.default = clientRouter;
//# sourceMappingURL=clientRouter.js.map