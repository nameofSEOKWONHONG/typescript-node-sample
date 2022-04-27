import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "COMMENT" })
export class Comment {
    @Column()
    @PrimaryGeneratedColumn()
    ID: number;
    @Column()
    @PrimaryColumn()
    REF_BREAD_ID: number;
    @Column({length:64})
    NAME: string;
    @Column({length:512})
    EMAIL: string;
    @Column({type:'text'})
    CONTENT: string;
    @Column()
    DATE: Date;
}