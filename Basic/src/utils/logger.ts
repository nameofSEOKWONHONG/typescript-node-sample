import { injectable } from "inversify"

export interface ILogger {
    write(obj:any):void
}

@injectable()
export class Logger implements ILogger {
    write(obj:any): void {
        console.log(obj)
    }
}