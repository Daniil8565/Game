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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const fs = __importStar(require("fs"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const path = __importStar(require("path"));
const vite_1 = require("vite");
const commentController_1 = require("./controllers/commentController");
const replyController_1 = require("./controllers/replyController");
const topicController_1 = require("./controllers/topicController");
const auth_1 = require("./middleware/auth");
dotenv_1.default.config();
const isDev = () => process.env.NODE_ENV === 'development';
async function startServer() {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: 'http://localhost:3000',
        credentials: true,
    }));
    const port = Number(process.env.SERVER_PORT) || 3001;
    let vite;
    const distPath = path.resolve(__dirname, './client-dist');
    const srcPath = path.resolve(__dirname, './client');
    const ssrClientPath = path.resolve(__dirname, './client-dist/ssr-dist/client.cjs');
    if (isDev()) {
        vite = await (0, vite_1.createServer)({
            server: { middlewareMode: true },
            root: srcPath,
            appType: 'custom',
        });
        app.use(vite.middlewares);
    }
    app.use('/api/v2', (0, http_proxy_middleware_1.createProxyMiddleware)({
        changeOrigin: true,
        cookieDomainRewrite: { '*': '' },
        target: 'https://ya-praktikum.tech/api/v2',
    }));
    app.get('/api/topics', auth_1.authMiddleware, topicController_1.getTopics);
    app.post('/api/topics', auth_1.authMiddleware, topicController_1.createTopic);
    app.get('/api/topics/:id', auth_1.authMiddleware, topicController_1.getTopicById);
    app.get('/api/topics/:topicId/comments', auth_1.authMiddleware, commentController_1.getComments);
    app.post('/api/topics/:topicId/comments', auth_1.authMiddleware, commentController_1.createComment);
    app.get('/api/comments/:commentId/replies', auth_1.authMiddleware, replyController_1.getReplies);
    app.post('/api/comments/:commentId/replies', auth_1.authMiddleware, replyController_1.createReply);
    app.get('/signin/callback', async (req, res) => {
        const { code, cid } = req.query;
        console.log(code, cid);
        res.json({ code, cid });
    });
    app.get('/api', (_, res) => {
        res.json('👋 Howdy from the server :)');
    });
    if (!isDev()) {
        app.use('/assets', express_1.default.static(path.resolve(distPath, 'assets')));
    }
    app.use('*', async (req, res, next) => {
        const url = req.originalUrl;
        try {
            let template;
            if (!isDev()) {
                template = fs.readFileSync(path.resolve(distPath, 'index.html'), 'utf-8');
            }
            else {
                template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8');
                template = await vite.transformIndexHtml(url, template);
            }
            const { render } = isDev()
                ? await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
                : require(ssrClientPath);
            const appHtml = await render(url, req.headers.cookie);
            const html = template.replace(`<!--ssr-outlet-->`, appHtml);
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        }
        catch (e) {
            if (isDev()) {
                vite.ssrFixStacktrace(e);
            }
            next(e);
        }
    });
    app.listen(port, () => {
        console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
    });
}
startServer();
//# sourceMappingURL=index.js.map