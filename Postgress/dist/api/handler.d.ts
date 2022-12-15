import { Handler } from "express";
import { DataResponse } from "./api";
export declare type DataResponseHandler<T> = (...params: Parameters<Handler>) => Promise<DataResponse<T>>;
export declare const handleCatching: <T>(handler: DataResponseHandler<T>) => Handler;
