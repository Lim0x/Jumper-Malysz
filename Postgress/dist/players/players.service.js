"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersService = void 0;
const Player_1 = require("../models/Player");
const sequelize_1 = require("sequelize");
const error_1 = require("../api/error");
const util_1 = require("../api/util");
class PlayersService {
    constructor() {
    }
    async getAll() {
        const players = await Player_1.Player.findAll();
        return players.map(it => it.dataValues);
    }
    async getSingle(id) {
        try {
            const player = await Player_1.Player.findByPk(id);
            return player === null || player === void 0 ? void 0 : player.dataValues;
        }
        catch (error) {
            if ((0, util_1.isInvalidUuidError)(error)) {
                return undefined;
            }
            throw error;
        }
    }
    async createSingle(body) {
        try {
            const player = await Player_1.Player.create(body);
            return player.dataValues;
        }
        catch (error) {
            if (error instanceof sequelize_1.UniqueConstraintError) {
                throw new error_1.ApiError("This player already exists", 409);
            }
            if (error instanceof sequelize_1.ValidationError) {
                const errors = error.errors.map(it => [it.path, it.message]);
                throw new error_1.ApiError("Validation error", 422, Object.fromEntries(errors));
            }
            throw error;
        }
    }
    async updateSingle(changes) {
        try {
            const player = await Player_1.Player.findByPk(changes.id);
            if (!player) {
                return undefined;
            }
            await player.update(changes);
            return player.dataValues;
        }
        catch (error) {
            if ((0, util_1.isInvalidUuidError)(error)) {
                return undefined;
            }
            if (error instanceof sequelize_1.ValidationError) {
                const errors = error.errors.map(it => [it.path, it.message]);
                throw new error_1.ApiError("Validation error", 422, Object.fromEntries(errors));
            }
            throw error;
        }
    }
    async deleteSingle(id) {
        try {
            const player = await Player_1.Player.findByPk(id);
            if (!player) {
                return undefined;
            }
            await player.destroy();
            return player.dataValues;
        }
        catch (error) {
            if ((0, util_1.isInvalidUuidError)(error)) {
                return undefined;
            }
            throw error;
        }
    }
}
exports.PlayersService = PlayersService;
//# sourceMappingURL=players.service.js.map