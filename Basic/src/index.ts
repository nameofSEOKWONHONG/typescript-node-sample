import { Container } from "inversify";
import { List } from "linqts"
import User from './entity/User';
import { myContainer } from "./inversify.config";
import { UserRepository } from './repository/UserRepository';
import { LoginService } from "./services/LoginService"
import { TYPES } from "./types";
import { Logger } from "./utils/logger";

let user = new User(0, "test", 29)
user.print()

let users = new List<User>()
users.Add(new User(0, "test1", 1))
users.Add(new User(1, "test2", 1))
users.Add(new User(2, "test3", 1))

users.ForEach(x => x?.print())

console.log(users.Remove(users.First(u => u?.Name == 'test3')))
console.log(users)

users.ForEach(x => x?.print())

const userRepository = myContainer.get<UserRepository>(TYPES.UserRepository);
users.ForEach((v, i, list) => {
    userRepository.add(v!)
})
var insertedUser = userRepository.add(new User(0, "test4", 40))

const loginService = myContainer.get<LoginService>(TYPES.LoginService)
let result = loginService.isLogin("test4", 40)
console.log(result)
