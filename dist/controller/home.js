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
exports.getProductList = exports.getProducts = void 0;
const home_1 = require("../models/home");
function getHomeSections() {
    return __awaiter(this, void 0, void 0, function* () {
        const sectionsFromDB = yield home_1.sectionsHome.findAll();
        return sectionsFromDB;
    });
}
function getHomeProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const productList = yield home_1.productsHome.findAll();
        return productList;
    });
}
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sections = yield getHomeSections();
        const products = yield getHomeProducts();
        const sectionsToFront = sections.map(section => {
            const newSection = {
                sectionId: section.dataValues.id.toString(),
                sectionName: section.dataValues.name,
                sectionImageUrl: section.dataValues.imageUrl,
            };
            return newSection;
        });
        const productsList = products.map(product => {
            const productsToFront = {
                id: product.dataValues.id.toString(),
                imageUrl: product.dataValues.imageUrl,
                name: product.dataValues.name,
                code: product.dataValues.code,
                description: product.dataValues.description,
                isOffer: product.dataValues.isOffer,
                categoryID: product.dataValues.categoryID.toString(),
                sectionID: product.dataValues.sectionID.toString(),
                price: parseFloat(product.dataValues.price)
            };
            return productsToFront;
        });
        const updatedSections = sectionsToFront.map(section => {
            const matchingProducts = productsList.filter(product => product.sectionID === section.sectionId);
            return Object.assign(Object.assign({}, section), { productList: matchingProducts });
        });
        res.json(updatedSections);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getProducts = getProducts;
const getProductList = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productsFromDb = yield getHomeProducts();
        const productsList = productsFromDb.map((product) => ({
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
        res.json(productsList);
    }
    catch (_a) {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});
exports.getProductList = getProductList;
//# sourceMappingURL=home.js.map