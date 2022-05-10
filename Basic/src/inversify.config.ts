import "reflect-metadata";
import { Container } from "inversify";
import { DataSource } from "typeorm";
import { datasource } from "./connection.config";
import { CoflFileUploadRepository, ICoflFileUploadRepository } from "./repository/CoflFileUploadRepository";
import { IUserRepository, UserRepository } from "./repository/UserRepository";
import { LoginService, ILoginService } from "./services/LoginService";
import { TYPES } from "./types";
import { ConsoleLogger, ILogger } from "./utils/logger";
import { GetFileService, IGetFileService } from "./services/GetFileService";
import { IServiceSample, ServiceSample } from "./services/ServiceCoreSample";
import { IWriteFileService, WriteFileService } from "./services/WriteFileService";

const container = new Container();
container.bind<IWriteFileService>(TYPES.WriteFileService).to(WriteFileService).inTransientScope();
container.bind<IServiceSample>(TYPES.ServiceSample).to(ServiceSample).inTransientScope()
container.bind<DataSource>(TYPES.DataSource).toConstantValue(datasource)
container.bind<ICoflFileUploadRepository>(TYPES.CoflFileUploadRepository).to(CoflFileUploadRepository).inTransientScope()
container.bind<ILogger>(TYPES.Logger).to(ConsoleLogger).inTransientScope()
container.bind<ILoginService>(TYPES.LoginService).to(LoginService).inTransientScope()
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepository).inTransientScope()
container.bind<IGetFileService>(TYPES.GetFileService).to(GetFileService).inSingletonScope()

export {container as Container}
