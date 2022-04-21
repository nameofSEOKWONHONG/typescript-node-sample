import { Container } from "inversify";
import "reflect-metadata";
import { UserRepository } from "./repository/UserRepository";
import { LoginService, ILoginService } from "./services/LoginService";
import { TYPES } from "./types";
import { Logger, ILogger } from "./utils/logger";

const myContainer = new Container();
myContainer.bind<ILogger>(TYPES.Logger).to(Logger).inTransientScope()
myContainer.bind<ILoginService>(TYPES.LoginService).to(LoginService).inTransientScope()
myContainer.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inTransientScope()

export {myContainer}
