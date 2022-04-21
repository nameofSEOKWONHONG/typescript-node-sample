import { injected } from "brandi"
import { List } from "linqts"
import User from "../entity/User"

export interface IUserRepository {
    add(user:User):any
    get(name: string, age: number):User
}

export class UserRepository implements IUserRepository {
    private _users:List<User>
    constructor() {
        this._users = new List<User>()
    }

    add(user:User) {
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
        return this._users.FirstOrDefault(u => u?.Name == name && u.Age == age);
    }    
}

injected()