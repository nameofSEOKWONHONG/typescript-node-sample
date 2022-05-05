import { injectable } from "inversify";
import { IServiceBase } from "./base.iservice";

@injectable()
export abstract class ServiceBase<TRequest, TResult> implements IServiceBase {
    public Request:TRequest
    public Result:TResult
    protected abstract ValidateAsync():Promise<boolean>
    protected abstract PreExecuteAsync() : Promise<void>
    protected abstract ExecuteAsync(): Promise<TResult>
    protected abstract PostExecuteAsync():Promise<void>
    public async ExecuteCoreAsync(param:any):Promise<TResult>{
        this.Request = param
        if(await this.ValidateAsync()) {
            await this.PreExecuteAsync();
            this.Result = await this.ExecuteAsync();
            await this.PostExecuteAsync();
        }
        return this.Result;
    }
}

