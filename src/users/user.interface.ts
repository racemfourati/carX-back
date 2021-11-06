import { Request } from '../request/request.interface'

export interface Users{
    id: number,
    name:string,
    email:string,
    phone: number,
    localisation: string,
    photo?:string,
    requests:Request[],
    createdAt?:Date
    
}