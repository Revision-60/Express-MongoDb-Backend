"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustomerRoutes_1 = __importDefault(require("./CustomerRoutes"));
const ItemRoutes_1 = __importDefault(require("./ItemRoutes"));
const router = (0, express_1.Router)();
const baseUrl = "/api/v1/";
router.use(`${baseUrl}customer`, new CustomerRoutes_1.default().getRouter());
router.use(`${baseUrl}item`, new ItemRoutes_1.default().getRouter());
exports.default = router;
