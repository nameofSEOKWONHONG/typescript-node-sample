import { injectable } from "inversify"

export interface ILogger {
    write(obj:any):void
}

@injectable()
export class ConsoleLogger implements ILogger {
    write(obj:any): void {
        console.log(obj)
    }
}