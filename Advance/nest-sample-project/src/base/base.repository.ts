export abstract class RepositoryBase<T> {
    abstract save(entity:T): Promise<T>;
    abstract delete(entity:T): Promise<boolean>;
}