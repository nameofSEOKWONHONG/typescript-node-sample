import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment";

@Entity({name:'BREAD'})
export class Bread {
    @Column('int')
    @PrimaryGeneratedColumn()
    ID: number;
    @Column({ length:300 })
    NAME: string;
    @Column({type:'decimal' })
    PRICE: number;
    @Column({ length:1000 })
    DESCRIPTION: string;
    @Column({type:'text'})
    IMAGE: string;
    @Column({length:5})
    CATEGORY: string;
    @Column({length:5})
    LABEL: string;
    @Column()
    FEATURED: boolean;
    @Column()
    QUANTITY: number;
    @Column()
    RATING: number;
    @Column()
    DATE: Date;
}