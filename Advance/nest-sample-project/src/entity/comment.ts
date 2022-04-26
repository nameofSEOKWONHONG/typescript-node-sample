import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "COMMENT" })
export class COMMENT {
    @Column()
    @PrimaryGeneratedColumn()
    ID: number;
    @Column({length:64})
    NAME: string;
    @Column({length:512})
    EMAIL: string;
    @Column({type:'text'})
    CONTENT: string;
    @Column()
    DATE: Date;
}