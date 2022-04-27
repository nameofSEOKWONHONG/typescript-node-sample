import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PagingOption } from "src/base/base.pagination";
import { RepositoryBase } from "src/base/base.repository";
import { Bread } from "src/entity/bread";
import { Repository } from "typeorm";

@Injectable()
export class BreadService extends RepositoryBase<Bread> {
    constructor(
        @InjectRepository(Bread)
        private breadRepository: Repository<Bread>,
    ) {
        super();
    }

    async get(id:number): Promise<Bread> {
        return await this.breadRepository
            .createQueryBuilder("bread")
            .where("bread.id = :id", { id: id })
            .getOne();
    }

    async gets(name:string, pagingOption:PagingOption): Promise<Bread[]> {
        return await this.breadRepository
            .createQueryBuilder("bread")
            .where("bread.name like :name", { name: `%${name}%` })
            .orderBy(pagingOption.sortName, pagingOption.getSortType())
            .take(pagingOption.pageSize)
            .limit(pagingOption.pageSize * pagingOption.page)
            .getMany();
    }

    async save(entity: Bread): Promise<Bread> {
        return await this.breadRepository.save(entity);
    }

    async delete(entity: Bread): Promise<boolean> {
        return await this.breadRepository.remove(entity) != null;
    }
}