"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFnToFind = void 0;
const home_1 = require("../models/home");
const sequelize_1 = require("sequelize");
function separarPalabras(cadena) {
    return cadena.replace(/([a-z])([A-Z])/g, '$1 $2');
}
const getFnToFind = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const params = req.query;
    console.log(params);
    if (params !== undefined) {
        if (params.hasOwnProperty('category') === true) {
            const catID = Number(params.category);
            try {
                res.json(yield getProductsByCategory(catID));
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
            ;
        }
        else {
            if (params.hasOwnProperty('search') === true) {
                const searchName = (_a = params.search) !== null && _a !== void 0 ? _a : '';
                try {
                    console.log(searchName);
                    res.json(yield getProductsByName(searchName));
                }
                catch (error) {
                    res.status(500).json({ error: 'Internal Server Error' });
                }
                ;
            }
        }
        ;
    }
});
exports.getFnToFind = getFnToFind;
function getProductsByCategory(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const catID = params;
        try {
            console.log(catID);
            const productListByCategory = yield home_1.productsHome.findAll({
                where: {
                    categoryID: catID
                }
            });
            const productsList = productListByCategory.map((product) => ({
                id: product.dataValues.id.toString(),
                imageUrl: product.dataValues.imageUrl,
                name: product.dataValues.name,
                code: product.dataValues.code,
                description: product.dataValues.description,
                isOffer: product.dataValues.isOffer,
                categoryID: product.dataValues.categoryID.toString(),
                sectionID: product.dataValues.sectionID.toString(),
                price: parseFloat(product.dataValues.price)
            }));
            return (productsList);
        }
        catch (error) {
            console.error(error);
            return;
        }
    });
}
;
function getProductsByName(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const productStr = params;
        const productName = separarPalabras(productStr);
        try {
            const productListByName = yield home_1.productsHome.findAll({
                where: {
                    name: {
                        [sequelize_1.Op.like]: '%' + productName + '%'
                    }
                }
            });
            const productsList = productListByName.map((product) => ({
                id: product.dataValues.id.toString(),
                imageUrl: product.dataValues.imageUrl,
                name: product.dataValues.name,
                code: product.dataValues.code,
                description: product.dataValues.description,
                isOffer: product.dataValues.isOffer,
                categoryID: product.dataValues.categoryID.toString(),
                sectionID: product.dataValues.sectionID.toString(),
                price: parseFloat(product.dataValues.price)
            }));
            console.log(productsList);
            return (productsList);
        }
        catch (error) {
            console.error(error);
            return;
        }
    });
}
//# sourceMappingURL=productsList.js.map