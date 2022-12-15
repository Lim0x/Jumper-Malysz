"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const error_1 = require("./api/error");
const players_service_1 = require("./players/players.service");
const players_controller_1 = require("./players/players.controller");
const app = express();
const port = process.env.port || 3000;
app.use(express.json());
const playersService = new players_service_1.PlayersService();
const playersController = new players_controller_1.PlayersController(playersService);
app.use("/players", playersController.router);
app.use(error_1.apiErrorHandler);
app.listen(port, () => {
    console.log(`Server listening at ::${port}`);
});
//# sourceMappingURL=app.js.map