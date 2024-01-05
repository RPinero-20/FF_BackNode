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
const Product_1 = require("../models/Product");
function productDetailApi(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestProductCode = req.query.code;
        console.log(requestProductCode);
        if (requestProductCode !== undefined) {
            try {
                const productFromDb = yield Product_1.Product.findOne({ where: { code: requestProductCode } });
                if (productFromDb !== null) {
                    const product = {
                        code: productFromDb.code,
                        name: productFromDb.name,
                        description: productFromDb.description,
                        price: productFromDb.price,
                        isInOffer: productFromDb.isInOffer,
                        discount: productFromDb.discount,
                        imageUrl: productFromDb.imageUrl,
                    };
                    res.json(product);
                }
                else {
                    res.status(404).json({ msg: 'Product not found!' });
                }
            }
            catch (_a) {
                res.status(500).json({ msg: 'Database problem, please contact admin' });
            }
        }
        else {
            res.status(400).json({
                msg: 'This endpoint require a param called \'code\'',
            });
        }
    });
}
exports.default = productDetailApi;
//# sourceMappingURL=productDetail.js.map