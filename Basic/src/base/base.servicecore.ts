import { IServiceBase } from "./base.iservice"
import { ServiceBase } from "./base.service";

export class ServiceCore {
    constructor(
        private serviceImpl : IServiceBase,
        private request : any){
            
        }

    public async ExecuteCoreAsync() : Promise<any> {        
        return await this.serviceImpl.ExecuteCoreAsync(this.request)
    }
}