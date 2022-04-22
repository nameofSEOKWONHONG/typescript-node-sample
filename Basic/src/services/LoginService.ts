import { inject, injectable } from "inversify";
import { UserRepository } from '../repository/UserRepository';
import { TYPES } from "../types";
import { ConsoleLogger, ILogger } from "../utils/logger";

export interface ILoginService {
    isLogin(name:string, age:number):boolean
}

@injectable()
export class LoginService implements ILoginService {
    _userRepository:UserRepository
    _logger:ConsoleLogger
    constructor(
        @inject(TYPES.Logger)logger:ConsoleLogger,
        @inject(TYPES.UserRepository)userRepository:UserRepository) {
        this._logger = logger
        this._userRepository = userRepository
    }
    
    isLogin(name:string, age:number):boolean {
        return this._userRepository.get(name, age) != null
    }
}