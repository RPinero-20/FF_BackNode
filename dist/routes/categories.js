"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_1 = require("../controller/categories");
const categoriesRouter = (0, express_1.Router)();
categoriesRouter.get('/', categories_1.getCategories);
exports.default = categoriesRouter;
//# sourceMappingURL=categories.js.map