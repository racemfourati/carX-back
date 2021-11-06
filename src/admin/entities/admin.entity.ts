
import { Column, Entity, PrimaryGeneratedColumn , OneToMany } from "typeorm";
@Entity()
export class AdminEntity {
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
        unique: true,
       })
    password:string;

    

    @Column({type: "timestamp", default:()=> "CURRENT_TIMESTAMP"})
    createdAts: Date  
    
}