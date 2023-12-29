"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = require("../controller/home");
const productDetail_1 = require("../controller/productDetail");
const categories_1 = require("../controller/categories");
const productsList_1 = require("../controller/productsList");
const connect_1 = require("../db/connect");
const clientRouter = (0, express_1.Router)();
const homeUrl = '/home';
const categories = '/categories';
const productsList = '/productsList';
const productDetail = '/productDetail';
clientRouter.use((_req, _res, next) => {
    (0, connect_1.conectToDB)();
    next();
});
clientRouter.get(homeUrl, home_1.getProducts);
clientRouter.get(categories, categories_1.getCategories);
clientRouter.get(productsList, productsList_1.getFnToFind);
clientRouter.get(productDetail, productDetail_1.getProductDetail);
exports.default = clientRouter;
//# sourceMappingURL=home.js.map