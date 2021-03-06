import { List } from "linqts"
import { ServiceCore } from "./base/base.servicecore"
import { GetFileServiceRequestDto } from "./dto/getFileServiceRequestDto"
import { WriteFileRequestDto } from "./dto/WriteFileRequestDto"
import User from './entity/User'
import { Container } from "./inversify.config"
import { UserRepository } from './repository/UserRepository'
import { GetFileService } from "./services/GetFileService"
import { LoginService } from "./services/LoginService"
import { ServiceSample } from "./services/ServiceCoreSample"
import { WriteFileService } from "./services/WriteFileService"
import { ConsoleLogger } from "./utils/logger"
import { rangeGenerator } from "./utils/rangeGenerator"
import logger from "./config/winston"
import { TYPES } from "./types"

/*
import { DataSource } from "typeorm"
import { CoflFileUploadRepository } from "./repository/CoflFileUploadRepository"
*/

(async() => {
    logger.info('Start')

    let user = new User(0, "test", 29)
    logger.debug(user)
    
    let users = new List<User>()
    users.Add(new User(0, "test1", 1))
    users.Add(new User(1, "test2", 1))
    users.Add(new User(2, "test3", 1))
    
    logger.info(users)
    logger.info(users.Remove(users.First(u => u?.Name == 'test3')))
    logger.info(users)
    
    const userRepository = Container.get<UserRepository>(TYPES.UserRepository)
    users.ForEach((v, i, list) => {
        userRepository.add(v!)
    })
    var insertedUser = userRepository.add(new User(0, "test4", 40))
    logger.info(insertedUser)
    
    const loginService = Container.get<LoginService>(TYPES.LoginService)
    let result = loginService.isLogin("test4", 40)
    logger.info(result)

    const sampleSvc = Container.get<ServiceSample>(TYPES.ServiceSample)
    const getfileSvc = Container.get<GetFileService>(TYPES.GetFileService)
    const writefileSvc = Container.get<WriteFileService>(TYPES.WriteFileService)
    const filename = "d://test1.txt";

    const svcCoreItems = new Array<ServiceCore>();
    svcCoreItems.push(new ServiceCore(writefileSvc, new WriteFileRequestDto(filename, "hello world on ts-node")))
    svcCoreItems.push(new ServiceCore(sampleSvc, "service pattern"))
    svcCoreItems.push(new ServiceCore(getfileSvc, new GetFileServiceRequestDto(filename)))
    for await(const svc of svcCoreItems) {
        logger.info('==============================================================')
        logger.info(svc)
        const svcResult = await svc.ExecuteCoreAsync()
        logger.info(svcResult);
        logger.info('==============================================================')
    }
    svcCoreItems.splice(0, svcCoreItems.length)
    logger.info(svcCoreItems)

    for(const num of rangeGenerator(1, 10)) {
        logger.info(num)
    }
    
    /*
    const datasource = myContainer.get<DataSource>(TYPES.DataSource)
    datasource.initialize()
    .then(async ds => {    
        const coflFileUploadRepository = myContainer.get<CoflFileUploadRepository>(TYPES.CoflFileUploadRepository)
        let uploadObj = await coflFileUploadRepository.get("", 0, 0)
        logger.write(uploadObj)
    
        let uploadObjs = await coflFileUploadRepository.gets("", [0, 0])
        logger.write(uploadObjs)
    
        let existsObj = await coflFileUploadRepository.get("", 0, 0)
        if(existsObj != null) {
            await coflFileUploadRepository.remove(existsObj)
        }
        else {
            uploadObj!.FILE_ID = 0
            await coflFileUploadRepository.add(uploadObj)
        }    
        ds.destroy()
    })
    .catch(err => logger.write(err))
    */
})();