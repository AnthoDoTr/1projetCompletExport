import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("loot")
export class LootEntity{

    @PrimaryGeneratedColumn()
    id : number

    @Column({length : 15, nullable: false, default : "N/C"})
    name : string

    @Column({nullable : false})
    value : number
}