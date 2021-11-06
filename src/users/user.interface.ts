import { Request } from '../request/request.interface'

export interface Users{
    id: number,
    name:string,
    email:string,
    phone: number,
<<<<<<< HEAD
  
    photo:string,
=======
    localisation: string,
    photo?:string,
    requests:Request[],
>>>>>>> 455eedce6f4e9d98df2cd64748babf484627de1a
    createdAt?:Date
    
}