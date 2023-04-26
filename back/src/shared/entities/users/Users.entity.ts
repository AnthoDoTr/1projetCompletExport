import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { validate } from "class-validator";
import { LifeTimeEntity } from "../LifeTime.entity"
import { Exclude } from "class-transformer";

@Entity("users")
export class UsersEntity extends LifeTimeEntity{

    @PrimaryGeneratedColumn()
    id : number

    @Column({  length : 15, unique : true, default : "N/C"})
    pseudo : string

    @Column({ unique : false})
    @Exclude()
    password : string

    @Column({ unique : false})
    score : number

}