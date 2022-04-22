const TYPES = {
    DataSource:Symbol.for("datasource"),
    CoflFileUploadRepository:Symbol.for("ICoflFileUploadRepository"),
    Logger: Symbol.for("ILogger"),
    DatabaseLogger: Symbol.for("DatabaseLogger"),
    UserRepository: Symbol.for("UserRepository"),
    LoginService: Symbol.for("ILoginService")
};

export { TYPES };