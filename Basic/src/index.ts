import { Container, token } from 'brandi';
import { List } from "linqts"
import User from './entity/User';
import { IUserRepository, UserRepository } from './repository/UserRepository';
import { LoginService, ILoginService } from "./services/LoginService"

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

export const TOKENS = {
    userRepository: token<IUserRepository>('userRepository'),
    loginService: token<ILoginService>('loginService')
}

export const container = new Container()
container.bind(TOKENS.loginService)
.toInstance(LoginService)
.inTransientScope()

container.bind(TOKENS.userRepository)
.toInstance(UserRepository)
.inTransientScope()

let userRepository = container.get(TOKENS.userRepository)
users.ForEach((v, i, list) => {
    userRepository.add(v!)
})

var insertedUser = userRepository.add(new User(0, "test4", 40))

let loginService = container.get(TOKENS.loginService)
let result = loginService.isLogin("test4", 40)
console.log(result)
