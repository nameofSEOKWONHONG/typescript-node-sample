export class GetFileServiceRequestDto {    
    constructor(public fileName:string) {}
}

export class GetFileServiceResultDto {
    constructor(public isExists:boolean, public text:string, public fileSize:number){}
}