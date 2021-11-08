import {Users} from '../users/user.interface'
import { Worker } from 'src/workers/workers.interface'

export interface Request{
    id: number,
    service:string,
    user:Users,
    positionx:number,
    positiony:number,
    typeOfCar: string,
    typeOfWash: string,
    isPayed: boolean,
    Price: string,
    paymentDate:Date,
    worker:Worker,
    createdAt?:Date
}