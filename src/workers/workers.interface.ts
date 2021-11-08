import { Request } from "src/request/request.interface";

export interface Worker{
    id: number,
    name:string,
    email:string,
    phone: number,
    localisation: string,
    requests:Request[],
    createdAt?:Date
}