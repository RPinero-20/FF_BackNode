"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Product = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'products',
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _code_decorators;
    let _code_initializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _category1_decorators;
    let _category1_initializers = [];
    let _category2_decorators;
    let _category2_initializers = [];
    let _category3_decorators;
    let _category3_initializers = [];
    let _price_decorators;
    let _price_initializers = [];
    let _isInOffer_decorators;
    let _isInOffer_initializers = [];
    let _discount_decorators;
    let _discount_initializers = [];
    let _imageUrl_decorators;
    let _imageUrl_initializers = [];
    var Product = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.name = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.code = __runInitializers(this, _code_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.category1 = __runInitializers(this, _category1_initializers, void 0);
            this.category2 = __runInitializers(this, _category2_initializers, void 0);
            this.category3 = __runInitializers(this, _category3_initializers, void 0);
            this.price = __runInitializers(this, _price_initializers, void 0);
            this.isInOffer = __runInitializers(this, _isInOffer_initializers, void 0);
            this.discount = __runInitializers(this, _discount_initializers, void 0);
            this.imageUrl = __runInitializers(this, _imageUrl_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "Product");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _name_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
            })];
        _code_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
            })];
        _description_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.TEXT,
            })];
        _category1_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
            })];
        _category2_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
            })];
        _category3_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
            })];
        _price_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.FLOAT,
            })];
        _isInOffer_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
            })];
        _discount_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
            })];
        _imageUrl_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
            })];
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: obj => "code" in obj, get: obj => obj.code, set: (obj, value) => { obj.code = value; } }, metadata: _metadata }, _code_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _category1_decorators, { kind: "field", name: "category1", static: false, private: false, access: { has: obj => "category1" in obj, get: obj => obj.category1, set: (obj, value) => { obj.category1 = value; } }, metadata: _metadata }, _category1_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _category2_decorators, { kind: "field", name: "category2", static: false, private: false, access: { has: obj => "category2" in obj, get: obj => obj.category2, set: (obj, value) => { obj.category2 = value; } }, metadata: _metadata }, _category2_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _category3_decorators, { kind: "field", name: "category3", static: false, private: false, access: { has: obj => "category3" in obj, get: obj => obj.category3, set: (obj, value) => { obj.category3 = value; } }, metadata: _metadata }, _category3_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: obj => "price" in obj, get: obj => obj.price, set: (obj, value) => { obj.price = value; } }, metadata: _metadata }, _price_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _isInOffer_decorators, { kind: "field", name: "isInOffer", static: false, private: false, access: { has: obj => "isInOffer" in obj, get: obj => obj.isInOffer, set: (obj, value) => { obj.isInOffer = value; } }, metadata: _metadata }, _isInOffer_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _discount_decorators, { kind: "field", name: "discount", static: false, private: false, access: { has: obj => "discount" in obj, get: obj => obj.discount, set: (obj, value) => { obj.discount = value; } }, metadata: _metadata }, _discount_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _imageUrl_decorators, { kind: "field", name: "imageUrl", static: false, private: false, access: { has: obj => "imageUrl" in obj, get: obj => obj.imageUrl, set: (obj, value) => { obj.imageUrl = value; } }, metadata: _metadata }, _imageUrl_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Product = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Product = _classThis;
})();
exports.Product = Product;
//# sourceMappingURL=Product.js.map