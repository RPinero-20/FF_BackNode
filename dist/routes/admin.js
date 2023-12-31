"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connect_1 = require("../db/connect");
const admin_1 = require("../controller/admin");
const admin_2 = require("../controller/admin");
const usuarios_1 = require("../controller/usuarios");
const adminRouter = (0, express_1.Router)();
const homeUrl = '/home';
const products = '/products';
const toEdit = '/products/:code';
const toDetail = '/productDetail/:id';
const toDelete = '/deleteProduct/:id';
const categories = '/category';
const users = '/users';
adminRouter.use((_req, _res, next) => {
    (0, connect_1.conectToDB)();
    next();
});
adminRouter.get(products, admin_1.getProducts);
adminRouter.get(toDetail, admin_1.getProductById);
adminRouter.put(toEdit, admin_1.putProductToEdit);
adminRouter.post(products, admin_1.postProduct);
adminRouter.delete(toDelete, admin_1.deleteProducts);
adminRouter.get(users, usuarios_1.getUsuarios);
adminRouter.get(categories, admin_2.getAdminCategories);
exports.default = adminRouter;
//# sourceMappingURL=admin.js.map