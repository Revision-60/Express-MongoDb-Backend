"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CustomerController_1 = __importDefault(require("../controllers/CustomerController"));
class CustomerRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new CustomerController_1.default();
        this.configRoutes = () => {
            this.router.post("/", this.controller.saveCustomer);
            this.router.get("/", this.controller.getAllCustomer);
            this.router.put("/:id", this.controller.updateCustomer);
            this.router.delete("/:id", this.controller.deleteCustomer);
        };
        this.getRouter = () => {
            return this.router;
        };
        this.configRoutes();
    }
}
exports.default = CustomerRoutes;
