export interface Jumper {
    readonly id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    position: JumperPosition;
}

export enum JumperPosition {
    Fast = "Szybki",
    JumpHigh = "Wysoko Skacze",
    Slow = "Wolny",
    JumpLow = "Nisko skacze",
}
