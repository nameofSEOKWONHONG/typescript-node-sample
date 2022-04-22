import { inject, injectable } from "inversify";
import { DataSource } from "typeorm";
import { COFL_FILE_UPLOAD } from "../entity/COFL_FILE_UPLOAD";
import { TYPES } from "../types";

export interface ICoflFileUploadRepository {
    get(comcode:string, fileid:number, seqno:number):Promise<COFL_FILE_UPLOAD | null>
    gets(comcode:string, fileid:number[]):Promise<COFL_FILE_UPLOAD[] | null>
    add(item:COFL_FILE_UPLOAD):Promise<void>
    remove(item:COFL_FILE_UPLOAD):Promise<void>
    update(item:COFL_FILE_UPLOAD):Promise<void>
}

@injectable()
export class CoflFileUploadRepository implements ICoflFileUploadRepository {
    constructor(
        @inject(TYPES.DataSource)private datasource:DataSource
    ) {

    }

    async get(comcode: string, fileid: number, seqno: number): Promise<COFL_FILE_UPLOAD | null> {                
        return await this.datasource
            .getRepository(COFL_FILE_UPLOAD)
            .createQueryBuilder("coflFileUpload")
            .where("coflFileUpload.COM_CODE = :comcode")
            .andWhere("coflFileUpload.FILE_ID = :fileid")
            .andWhere("coflFileUpload.SEQ_NO = :seqno")        
            .setParameters({comcode:comcode, fileid:fileid, seqno:seqno})
            .getOne()
    }

    async gets(comcode: string, fileid: number[]): Promise<COFL_FILE_UPLOAD[] | null> {
        return await this.datasource
            .getRepository(COFL_FILE_UPLOAD)
            .createQueryBuilder('coflFileUpload')
            .where('coflFileUpload.COM_CODE = :comcode')
            .andWhere('coflFileUpload.FILE_ID IN (:fileid)')
            .setParameters({comcode:comcode, fileid:fileid})
            .getMany()
    }    

    async add(item: COFL_FILE_UPLOAD): Promise<void> {
        const repo = this.datasource.getRepository(COFL_FILE_UPLOAD)
        await repo.save(item)
    }

    async remove(item: COFL_FILE_UPLOAD): Promise<void> {
        await this.datasource
            .createQueryBuilder()
            .delete()
            .from(COFL_FILE_UPLOAD)
            .where('COM_CODE = :comcode', {comcode:item.COM_CODE})
            .andWhere('FILE_ID = :fileid', {fileid:item.FILE_ID})
            .execute()
    }

    async update(item: COFL_FILE_UPLOAD): Promise<void> {
        var result = await this.datasource
            .getRepository(COFL_FILE_UPLOAD)
            .createQueryBuilder('coflFileUpload')
            .update<COFL_FILE_UPLOAD>(COFL_FILE_UPLOAD, {FILE_DES:item.FILE_DES})
            .where('coflFileUpload.COM_CODE = :comcode', {comcode:item.COM_CODE})
            .andWhere('coflFileUpload.FILE_ID = :fileid', {fileid:item.FILE_ID})
            .andWhere('coflFileUpload.SEQ_NO = :seqno', {seqno:item.SEQ_NO})
            .returning(['FILE_DES'])
            .execute()
            console.log(result)
    }
}