"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = require("../controller/home");
const categories_1 = require("../controller/categories");
const connect_1 = require("../db/connect");
const clientRouter = (0, express_1.Router)();
const homeUrl = '/home';
const categories = '/categories';
clientRouter.use((_req, _res, next) => {
    (0, connect_1.conectToDB)();
    next();
});
clientRouter.get(homeUrl, home_1.getProducts);
clientRouter.get(categories, categories_1.getCategories);
exports.default = clientRouter;
//# sourceMappingURL=home%20copy.js.map