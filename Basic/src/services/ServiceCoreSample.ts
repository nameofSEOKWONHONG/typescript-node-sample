import { injectable } from "inversify";
import { ServiceBase } from "../base/base.service";

export interface IServiceSample {

}

@injectable()
export class ServiceSample extends ServiceBase<string, string> implements IServiceSample {
    public async ValidateAsync(): Promise<boolean> {
        if(this.Request === "") return false
        return true
    }

    public async PreExecuteAsync(): Promise<void> {
    }
    public async ExecuteAsync(): Promise<string> {
        return `Hello World And ${this.Request}`
    }
    public async PostExecuteAsync(): Promise<void> {
    }
}
