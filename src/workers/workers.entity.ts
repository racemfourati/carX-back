import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class workerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column({unique: true})
    email:string;

    @Column()
    phone: number;

    @Column()
    localisation: string;

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAts: Date
}