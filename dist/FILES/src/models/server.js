"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Server_instances, _Server_DEF_PORT, _Server_app, _Server_port, _Server_apiPaths, _Server_middlewares, _Server_routes;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const clientRouter_1 = __importDefault(require("../routes/clientRouter"));
class Server {
    constructor() {
        var _a;
        _Server_instances.add(this);
        _Server_DEF_PORT.set(this, '3000');
        _Server_app.set(this, void 0);
        _Server_port.set(this, void 0);
        _Server_apiPaths.set(this, {
            client: '/api/client',
        });
        __classPrivateFieldSet(this, _Server_app, (0, express_1.default)(), "f");
        __classPrivateFieldSet(this, _Server_port, (_a = process.env.PORT) !== null && _a !== void 0 ? _a : __classPrivateFieldGet(this, _Server_DEF_PORT, "f"), "f");
        __classPrivateFieldGet(this, _Server_instances, "m", _Server_middlewares).call(this);
        __classPrivateFieldGet(this, _Server_instances, "m", _Server_routes).call(this);
    }
    listen() {
        __classPrivateFieldGet(this, _Server_app, "f").listen(__classPrivateFieldGet(this, _Server_port, "f"), () => {
            console.log(`Server listening on port: ${__classPrivateFieldGet(this, _Server_port, "f")}`);
        });
    }
}
_Server_DEF_PORT = new WeakMap(), _Server_app = new WeakMap(), _Server_port = new WeakMap(), _Server_apiPaths = new WeakMap(), _Server_instances = new WeakSet(), _Server_middlewares = function _Server_middlewares() {
    __classPrivateFieldGet(this, _Server_app, "f").use((0, cors_1.default)());
    __classPrivateFieldGet(this, _Server_app, "f").use((0, morgan_1.default)('dev'));
    __classPrivateFieldGet(this, _Server_app, "f").use((0, express_1.json)());
}, _Server_routes = function _Server_routes() {
    __classPrivateFieldGet(this, _Server_app, "f").use(__classPrivateFieldGet(this, _Server_apiPaths, "f").client, clientRouter_1.default);
};
exports.default = Server;
//# sourceMappingURL=server.js.map