import { max } from "rxjs";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { COMMENT } from "./comment";

@Entity({name:'BREAD'})
export class Bread {
    @Column('int')
    @PrimaryGeneratedColumn()
    ID: number;
    @Column({ length:300 })
    NAME: string;
    @Column({ length:12, type:'decimal' })
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
    @Column({nullable:true})
    COMMENTS: COMMENT[];
    @Column()
    DATE: Date;
}