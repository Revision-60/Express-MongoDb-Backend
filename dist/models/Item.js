"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.item = void 0;
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    qtyOnHand: {
        type: Number,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
});
exports.item = (0, mongoose_1.model)("Item", ItemSchema);
