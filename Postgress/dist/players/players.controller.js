"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayersController = void 0;
const express_1 = require("express");
const error_1 = require("../api/error");
const handler_1 = require("../api/handler");
class PlayersController {
    constructor(service) {
        this.service = service;
        this.getAll = (0, handler_1.handleCatching)(async () => {
            const allPlayers = await this.service.getAll();
            return { status: "ok", code: 200, data: allPlayers };
        });
        this.getSingle = (0, handler_1.handleCatching)(async (req) => {
            const { id } = req.params;
            const player = await this.service.getSingle(id);
            if (!player)
                throw new error_1.ApiError("Player not found", 404);
            return { status: "ok", code: 200, data: player };
        });
        this.createSingle = (0, handler_1.handleCatching)(async (req) => {
            const player = req.body;
            const createdPlayer = await this.service.createSingle(player);
            return { status: "ok", code: 201, data: createdPlayer };
        });
        this.updateSingle = (0, handler_1.handleCatching)(async (req) => {
            const { id } = req.params;
            const player = req.body;
            const updatedPlayer = await this.service.updateSingle(Object.assign(Object.assign({}, player), { id }));
            if (!updatedPlayer)
                throw new error_1.ApiError("Player not found", 404);
            return { status: "ok", code: 200, data: updatedPlayer };
        });
        this.deleteSingle = (0, handler_1.handleCatching)(async (req) => {
            const { id } = req.params;
            const player = await this.service.deleteSingle(id);
            if (!player)
                throw new error_1.ApiError("Player not found", 404);
            return { status: "ok", code: 200, data: player };
        });
        this.router = (0, express_1.Router)()
            .get("/", this.getAll)
            .get("/:id", this.getSingle)
            .post("/", this.createSingle)
            .put("/:id", this.updateSingle)
            .delete("/:id", this.deleteSingle);
    }
}
exports.PlayersController = PlayersController;
//# sourceMappingURL=players.controller.js.map