
import { Column, Entity, PrimaryGeneratedColumn , ManyToOne } from "typeorm";
import { userEntity } from "src/users/user.entity";
import { workerEntity } from "src/workers/workers.entity";


@Entity()
export class RequestEntity  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    service:string;

    @Column()
    positionx:number;

    @Column()
    positiony:number;

    @Column()
    typeOfCar: string;

    @Column()
    typeOfWash: string;

    @Column({nullable:true})
    isPayed: boolean;

    @Column({nullable:true})
    Price: string;

    @Column({nullable:true})
    paymentDate:Date;

    @ManyToOne(()=>workerEntity,worker=>worker.requests,{eager:true ,nullable:true})
    worker:workerEntity


    @ManyToOne(()=>userEntity , user=>user.requests,{eager: true})
    user: userEntity;

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAt: Date
}
