import { Get } from "@nestjs/common";
import { Bread } from "src/entity/bread";
import { BreadService } from "src/service/bread.service";

export class BreadController {
    constructor(private readonly breadService:BreadService) { }
    @Get()
    async get(id:number): Promise<Bread> {
        return await this.breadService.get(id);
    }
}