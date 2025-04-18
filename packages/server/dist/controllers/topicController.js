"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopicById = exports.createTopic = exports.getTopics = void 0;
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const models_1 = require("../models");
const getTopics = async (req, res) => {
    try {
        console.log(`req ${req}`);
        const topics = await models_1.Topic.findAll();
        res.json(topics);
    }
    catch (error) {
        console.error('getTopics: Error fetching topics:', error);
        res.status(500).json({ error: 'Server error getTopics' });
    }
};
exports.getTopics = getTopics;
const createTopic = async (req, res) => {
    try {
        const { title } = req.query;
        if (!title || typeof title !== 'string') {
            res.status(400).json({ error: 'Title is required' });
            return;
        }
        const user = req.user;
        if (!user || !user.id) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const sanitizedTitle = (0, sanitize_html_1.default)(title);
        const topicData = { title: sanitizedTitle, userId: user.id };
        const topic = await models_1.Topic.create(topicData);
        res.status(201).json(topic);
    }
    catch (error) {
        console.error('createTopic: Error creating topic:', error);
        res.status(500).json({ error: 'Server error createTopic' });
    }
};
exports.createTopic = createTopic;
const getTopicById = async (req, res) => {
    try {
        const { id } = req.params;
        const topic = await models_1.Topic.findByPk(id);
        if (!topic) {
            res.status(404).json({ error: 'Topic not found' });
            return;
        }
        res.json(topic);
    }
    catch (error) {
        console.error('getTopicById: Error fetching topic by id:', error);
        res.status(500).json({ error: 'Server error getTopicById' });
    }
};
exports.getTopicById = getTopicById;
//# sourceMappingURL=topicController.js.map