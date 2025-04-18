"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = exports.getComments = void 0;
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const models_1 = require("../models");
const getComments = async (req, res) => {
    try {
        const { topicId } = req.params;
        const comments = await models_1.Comment.findAll({
            where: { topicId: parseInt(topicId) },
        });
        res.json(comments);
    }
    catch (error) {
        console.error('getComments: Error fetching comments:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.getComments = getComments;
const createComment = async (req, res) => {
    try {
        const { topicId } = req.params;
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
        const commentData = {
            text: sanitizedText,
            topicId: parseInt(topicId),
            userId: user.id,
        };
        const comment = await models_1.Comment.create(commentData);
        res.status(201).json(comment);
    }
    catch (error) {
        console.error('createComment: Error creating comment:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
exports.createComment = createComment;
//# sourceMappingURL=commentController.js.map