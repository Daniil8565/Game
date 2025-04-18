"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const axios_1 = __importDefault(require("axios"));
const API_BASE_URL = 'http://localhost:3001/api/v2';
class UserService {
    constructor() {
        this.axiosInstance = axios_1.default.create({
            baseURL: API_BASE_URL,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    async signinWithCookie(cookieString) {
        var _a, _b;
        try {
            const response = await this.axiosInstance.get('/auth/user', {
                headers: { Cookie: cookieString },
            });
            return response.data;
        }
        catch (error) {
            console.error(`Server UserService: Error: ${error}`);
            throw new Error(axios_1.default.isAxiosError(error) && ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.reason)
                ? error.response.data.reason
                : 'Ошибка авторизации по куке');
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map