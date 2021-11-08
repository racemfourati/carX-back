import { Request } from "src/request/request.interface";

export interface Worker{
    id: number,
    name:string,
    email:string,
    phone: number,
    positionx:number,
    positiony:number,
    requests:Request[],
    createdAt?:Date
}