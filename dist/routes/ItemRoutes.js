"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ItemController_1 = __importDefault(require("../controllers/ItemController"));
class ItemRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new ItemController_1.default();
        this.configRoutes = () => {
            this.router.post("/api/v1/item", this.controller.saveItem);
            this.router.get("/api/v1/item", this.controller.getAllItem);
            this.router.put("/api/v1/item/:id", this.controller.updateItem);
            this.router.delete("/api/v1/item/:id", this.controller.deleteItem);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.configRoutes();
    }
}
exports.default = ItemRoutes;
