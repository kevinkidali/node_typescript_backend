"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const Schema = mongoose.Schema;
exports.ChatSchema = new Schema({
    connection: {
        type: String,
        trim: true,
        required: 'Connection id required',
    },
    receiver_id: {
        type: String,
        trim: true,
        required: 'Receiver id required',
    },
    sender_id: {
        type: String,
        trim: true,
        required: 'Sender id required',
    },
    message: {
        type: String,
        trim: true,
        required: 'Message body required',
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=chat.js.map