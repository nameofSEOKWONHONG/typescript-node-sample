import { inject, injectable } from "inversify"
import { List } from "linqts"
import User from "../entity/User"
import { TYPES } from "../types"
import { ILogger } from "../utils/logger"

export interface IUserRepository {
    add(user:User):void
    get(name: string, age: number):User
}

@injectable()
export class UserRepository implements IUserRepository {
    private _users:List<User>
    private _logger:ILogger
    constructor(
        @inject(TYPES.Logger)logger:ILogger) {
            this._logger = logger
            this._users = new List<User>()
    }

    add(user:User) {
        this._logger.write(user)

        var exists = this._users.FirstOrDefault(x => x!.Name == user.Name)
        if(exists != null) {
            return null
        }

        var max = this._users.Max(s => s.Index) + 1;
        var newUser = new User(max, user.Name, user.Age)
        this._users.Add(newUser)
        return newUser
    }
    get(name: string, age: number):User {
        this._logger.write(`${name}, ${age}`)
        return this._users.FirstOrDefault(u => u?.Name == name && u.Age == age);
    }
}