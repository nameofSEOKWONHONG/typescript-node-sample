import { injected } from 'brandi';
import { IUserRepository } from '../repository/UserRepository';
import { TOKENS } from '../tokens';

export interface ILoginService {
    isLogin(name:string, age:number):boolean
}

export class LoginService implements ILoginService {    
    constructor(private userRepository:IUserRepository) {
        
    }
    
    isLogin(name:string, age:number):boolean {
        return this.userRepository.get(name, age) != null
    }
}

injected(LoginService, TOKENS.userRepository)