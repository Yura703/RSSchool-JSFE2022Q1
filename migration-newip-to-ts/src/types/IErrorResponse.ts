import { IResponse } from "./IResponse";
import { Status } from "./statusEnum";

export interface IErrorResponse {
    status: Status.error;
    code: string; 
    message: string;
}
