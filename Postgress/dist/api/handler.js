"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCatching = void 0;
const handleCatching = (handler) => {
    return async (req, res, next) => {
        try {
            const response = await handler(req, res, next);
            res.json(response).status(response.code);
        }
        catch (error) {
            next(error);
        }
    };
};
exports.handleCatching = handleCatching;
//# sourceMappingURL=handler.js.map