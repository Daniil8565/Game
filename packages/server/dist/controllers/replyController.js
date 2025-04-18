"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReply = exports.getReplies = void 0;
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const models_1 = require("../models");
const getReplies = async (req, res) => {
    try {
        const { commentId } = req.params;
        const replies = await models_1.Reply.findAll({
            where: { commentId: parseInt(commentId) },
        });
        res.json(replies);
    }
    catch (error) {
        console.error('getReplies: Error fetching replies:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.getReplies = getReplies;
const createReply = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { text } = req.query;
        if (!text || typeof text !== 'string') {
            res.status(400).json({ error: 'Text is required' });
            return;
        }
        const user = req.user;
        if (!user || !user.id) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const sanitizedText = (0, sanitize_html_1.default)(text);
        const replyData = {
            text: sanitizedText,
            commentId: parseInt(commentId),
            userId: user.id,
        };
        const reply = await models_1.Reply.create(replyData);
        res.status(201).json(reply);
    }
    catch (error) {
        console.error('createReply: Error creating reply:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.createReply = createReply;
//# sourceMappingURL=replyController.js.map