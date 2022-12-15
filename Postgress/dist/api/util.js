"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInvalidUuidError = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("pg");
const isInvalidUuidError = (error) => {
    if (error instanceof sequelize_1.DatabaseError) {
        const originalError = error.original;
        if (originalError instanceof pg_1.DatabaseError) {
            if (originalError.code === "22P02") {
                return true;
            }
        }
    }
    return false;
};
exports.isInvalidUuidError = isInvalidUuidError;
//# sourceMappingURL=util.js.map