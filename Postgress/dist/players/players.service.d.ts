import { Player as DomainPlayer } from "../domain/Player";
export declare class PlayersService {
    constructor();
    getAll(): Promise<DomainPlayer[]>;
    getSingle(id: string): Promise<DomainPlayer | undefined>;
    createSingle(body: any): Promise<DomainPlayer>;
    updateSingle(changes: any): Promise<DomainPlayer | undefined>;
    deleteSingle(id: string): Promise<DomainPlayer | undefined>;
}
