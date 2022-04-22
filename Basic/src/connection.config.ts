import { DataSource } from "typeorm"
import { COFL_FILE_UPLOAD } from "./entity/COFL_FILE_UPLOAD"

export const datasource = new DataSource({
    type:"mysql",
    host:"",
    port:0,
    username:"",
    password:"",
    database:"",
    synchronize:false,
    logging:true,
    entities:[
        COFL_FILE_UPLOAD
    ],        
    subscribers:[],
    migrations:[],
    migrationsRun:false,
})