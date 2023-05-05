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
const Customer_1 = require("../models/Customer");
class CustomerController {
    constructor() {
        this.saveCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let customer = new Customer_1.Customer(req.body);
                let savedCustomer = yield customer.save();
                return res
                    .status(200)
                    .json({ message: "Successfully Saved..!", resposeData: savedCustomer });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "Unknown Error!" });
                }
            }
        });
        this.getAllCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let customers = yield Customer_1.Customer.find();
                return res
                    .status(200)
                    .json({ message: "Successfully Loaded..!", responseData: customers });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "Unknown Error!" });
                }
            }
        });
        this.updateCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                let updatedCustomer = yield Customer_1.Customer.findByIdAndUpdate(id, req.body, {
                    new: true,
                });
                return res.status(200).json({
                    message: "Successfully Updated..!",
                    responseData: updatedCustomer,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error });
                }
                else {
                    return res.status(500).json({ message: "Unknown Error!" });
                }
            }
        });
        this.deleteCustomer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                let deleteCustomer = yield Customer_1.Customer.findByIdAndDelete(id);
                if (!deleteCustomer) {
                    throw new Error("Failed to Delete Customer..!");
                }
                return res.status(200).json({
                    message: "Successfully Deleted..!",
                    responseData: deleteCustomer,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(500).json({ message: error.message });
                }
                else {
                    return res.status(500).json({ message: "Unknown Error!" });
                }
            }
        });
    }
}
exports.default = CustomerController;
