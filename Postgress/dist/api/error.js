"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiErrorHandler = exports.ApiError = void 0;
class ApiError extends Error {
    constructor(message, code, errors) {
        super(message);
        this.message = message;
        this.code = code;
        this.errors = errors;
        this.status = "error";
    }
}
exports.ApiError = ApiError;
const apiErrorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        next(err);
        return;
    }
    if (err instanceof ApiError) {
        const { status, code, message, errors } = err;
        const response = {
            status, code, message, errors,
        };
        res.json(response).status(response.code);
        return;
    }
    if (process.env.NODE_ENV === "development") {
        console.error(err);
    }
    const response = {
        status: "error", code: 500,
    };
    res.json(response).status(response.code);
};
exports.apiErrorHandler = apiErrorHandler;
//# sourceMappingURL=error.js.map