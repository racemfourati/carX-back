import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class userEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true,
       })
    name:string;

    @Column({
        nullable: true,
        unique: true,
       })
    email:string;

    @Column({
        nullable: true,
       })
    phone: number;
    @Column({
     nullable: true,
    })
    photo: string;
    

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAts: Date  
    
}