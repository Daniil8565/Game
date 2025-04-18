"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const UserService_1 = require("../services/UserService");
const authMiddleware = async (req, res, next) => {
    const userService = new UserService_1.UserService();
    try {
        const cookies = req.headers.cookie;
        if (!cookies) {
            res.status(403).json({ error: 'No cookies provided' });
            return;
        }
        const cookiesMap = new Map(cookies.split(';').map(cookie => {
            const [key, value] = cookie.trim().split('=');
            return [key, value || ''];
        }));
        const uuid = cookiesMap.get('uuid');
        const authCookie = cookiesMap.get('authCookie');
        if (!uuid || !authCookie) {
            res.status(403).json({ error: 'Invalid cookie format' });
            return;
        }
        const user = await userService.signinWithCookie(cookies);
        req.user = { id: user.id };
        next();
    }
    catch (error) {
        console.error('Authentication error:', error);
        res.status(403).json({ error: 'Not authenticated' });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.js.map