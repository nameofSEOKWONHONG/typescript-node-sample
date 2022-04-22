import "reflect-metadata";
import { Container } from "inversify";
import { DataSource } from "typeorm";
import { datasource } from "./connection.config";
import { CoflFileUploadRepository, ICoflFileUploadRepository } from "./repository/CoflFileUploadRepository";
import { IUserRepository, UserRepository } from "./repository/UserRepository";
import { LoginService, ILoginService } from "./services/LoginService";
import { TYPES } from "./types";
import { ConsoleLogger, ILogger } from "./utils/logger";

const myContainer = new Container();
myContainer.bind<DataSource>(TYPES.DataSource).toConstantValue(datasource)
myContainer.bind<ICoflFileUploadRepository>(TYPES.CoflFileUploadRepository).to(CoflFileUploadRepository).inTransientScope()
myContainer.bind<ILogger>(TYPES.Logger).to(ConsoleLogger).inTransientScope()
myContainer.bind<ILoginService>(TYPES.LoginService).to(LoginService).inTransientScope()
myContainer.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository).inTransientScope()

export {myContainer}
