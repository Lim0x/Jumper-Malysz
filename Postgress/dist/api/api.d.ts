export declare type ResponseStatus = "ok" | "error";
export interface Response {
    status: ResponseStatus;
    code: number;
    message?: string;
    errors?: ResponseErrors;
}
export declare type ResponseErrors = object | string[];
export interface DataResponse<T> extends Response {
    data: T;
}
