import { token } from 'brandi';
import { UserRepository } from './repository/UserRepository';
import { LoginService } from './services/LoginService';

export const TOKENS = {
  userRepository: token<UserRepository>('userRepository'),
  loginService: token<LoginService>('loginService'),
}; 