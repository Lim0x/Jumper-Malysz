import { Handler, Router } from "express";
import { PlayersService } from "./players.service";
export declare class PlayersController {
    private readonly service;
    readonly router: Router;
    getAll: Handler;
    getSingle: Handler;
    createSingle: Handler;
    updateSingle: Handler;
    deleteSingle: Handler;
    constructor(service: PlayersService);
}
