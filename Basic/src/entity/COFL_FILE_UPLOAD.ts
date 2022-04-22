import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({name:'COFL_FILE_UPLOAD'})
export class COFL_FILE_UPLOAD
{
    @Column('varchar')    
    @PrimaryColumn()
    COM_CODE:string
    @Column('int')
    @PrimaryColumn()
    FILE_ID:number
    @Column('int')
    @PrimaryColumn()
    SEQ_NO:number        
    @Column('varchar')
    OWNER_ID:string
    @Column('char')
    CD_FILEMENU:string
    @Column('char')
    STORAGE_CD:string
    @Column('int')
    TOTAL_SIZE:number
    @Column('varchar')
    FILE_DES:string
    @Column('varchar')
    ATTACH_INFO:string
    @Column('varchar')
    ACCOUNT:string
    @Column('varchar')
    WRITER_ID:string
    @Column('datetime')
    WRITE_DT:string
    // public getWriteDt():number {
    //     return Date.parse(this.WRITE_DT)
    // }
    @Column('varchar')
    EDITOR_ID:string
    @Column('datetime')
    EDIT_DT:string
    // public getEditDt() : number {
    //     return Date.parse(this.WRITE_DT)
    // }
    @Column('bigint')
    HID:number
    @Column('bit')
    GARBG_FILE_TF:number
    @Column('varchar')
    PRG_ID:string
    @Column('tinyint')
    FILE_TRCL_CPLT_TF:number
}