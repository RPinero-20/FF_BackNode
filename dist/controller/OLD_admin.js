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
exports.deleteProducts = exports.postProduct = exports.putProductToEdit = exports.getProductById = exports.getProducts = void 0;
const admin_1 = require("../models/admin");
const getProducts = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('POR AQUI PASÓ!');
    try {
        const productList = yield admin_1.adminProducts.findAll();
        res.json(productList);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: ' Internal Server Error'
        });
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const productDetail = yield admin_1.adminProducts.findByPk(id);
        if (productDetail) {
            res.json(productDetail);
        }
        else {
            res.status(404).json({
                msg: `Producto no encontrado: ${id} `,
            });
        }
    }
    catch (_a) {
        res.status(500).json({
            Error: 'Internal Server Error'
        });
        return;
    }
});
exports.getProductById = getProductById;
function getProductByCode(productCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const productToEdit = yield admin_1.adminProducts.findOne({
            where: {
                code: productCode
            }
        });
        return productToEdit;
    });
}
const putProductToEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.params;
    const { body } = req;
    try {
        const productToEdit = yield getProductByCode(code);
        console.log(productToEdit);
        if (!productToEdit) {
            res.status(404).json({
                Error: 'No existe Producto con Código: ' + code
            });
            return;
        }
        yield productToEdit.update(body);
        res.json(productToEdit);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error.'
        });
    }
});
exports.putProductToEdit = putProductToEdit;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existCode = yield admin_1.adminProducts.findOne({
            where: {
                code: body.code
            }
        });
        if (existCode) {
            res.status(400).json({
                msg: 'Código de producto ya existe. ' + body.code
            });
            return;
        }
        const productData = yield admin_1.adminProducts.create(body);
        res.json(productData);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error interno contacte al administrador.'
        });
    }
});
exports.postProduct = postProduct;
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteProduct = yield admin_1.adminProducts.findByPk(id);
    if (!deleteProduct) {
        res.status(404).json({
            msg: 'No se encuentra el producto indicado: ' + id
        });
    }
    else {
        yield deleteProduct.destroy({});
        res.status(200).json({
            Message: 'Registro eliminado.'
        });
    }
});
exports.deleteProducts = deleteProducts;
//# sourceMappingURL=OLD_admin.js.map