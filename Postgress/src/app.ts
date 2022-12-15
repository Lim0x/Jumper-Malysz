import * as express from "express";
import { apiErrorHandler } from "./api/error";
import { PlayersService } from "./players/players.service";
import { PlayersController } from "./players/players.controller";
import sequelize from "./sequelize";
import { Player } from "./models/Player";

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

const playersService = new PlayersService();
const playersController = new PlayersController(playersService);
app.use("/players", playersController.router);

app.use(apiErrorHandler);




  app.listen(port, () => {
    console.log(`Server listening at ::${port}`);
  });



