import { Response, ResponseErrors } from "./api";
import { ErrorRequestHandler } from "express";
export declare class ApiError extends Error implements Response {
    readonly message: string;
    readonly code: number;
    readonly errors?: ResponseErrors;
    readonly status = "error";
    constructor(message: string, code: number, errors?: ResponseErrors);
}
export declare const apiErrorHandler: ErrorRequestHandler;
