import * as fs from "fs";
import * as ps from "path";
import { injectable } from "inversify";
import { ServiceBase } from "../base/base.service";
import { GetFileServiceRequestDto, GetFileServiceResultDto } from "../dto/getFileServiceRequestDto";

export interface IGetFileService {

}

@injectable()
export class GetFileService extends ServiceBase<GetFileServiceRequestDto, GetFileServiceResultDto> implements IGetFileService {
    isExists:boolean
    protected async ValidateAsync(): Promise<boolean> {
        if(this.Request.fileName === "") return false
        this.isExists = await fs.existsSync(this.Request.fileName)
        return this.isExists
    }

    protected async PreExecuteAsync(): Promise<void> {
        
    }
    protected async ExecuteAsync(): Promise<GetFileServiceResultDto> {
        const text = await fs.readFileSync(this.Request.fileName).toString();
        const state = await fs.statSync(this.Request.fileName);
        return new GetFileServiceResultDto(this.isExists, text, state.size);
    }
    protected async PostExecuteAsync(): Promise<void> {
        
    }
    

    // async isFileExistsAsync(filename:string) : Promise<boolean> {
    //     return await fs.existsSync(filename);
    // }

    // async readFileAsync(filename:string) : Promise<Buffer> {
    //     return await fs.readFileSync(filename)
    // }

    // async createFileAsync(filename:string, txt:string) : Promise<void> {        
    //     let wstream = fs.createWriteStream(filename)
    //     wstream.write(txt)
    // }
}