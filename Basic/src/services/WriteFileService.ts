import * as fs from "fs";
import { injectable } from "inversify";
import { ServiceBase } from "../base/base.service";
import { WriteFileRequestDto } from "../dto/WriteFileRequestDto";

export interface IWriteFileService {
    
}

@injectable()
export class WriteFileService extends ServiceBase<WriteFileRequestDto, boolean> implements IWriteFileService {
    protected async ValidateAsync(): Promise<boolean> {
        if(this.Request.filename === "") return false
        return await fs.existsSync(this.Request.filename)
    }
    protected async PreExecuteAsync(): Promise<void> {
        
    }
    protected async ExecuteAsync(): Promise<boolean> {
        try {
            await fs.writeFileSync(this.Request.filename, this.Request.content);
        }
        catch(err) {
            throw err
        }

        return true;
    }
    protected async PostExecuteAsync(): Promise<void> {
        
    }

}