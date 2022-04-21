const TYPES = {
    Logger: Symbol.for("ILogger"),
    DatabaseLogger: Symbol.for("DatabaseLogger"),
    UserRepository: Symbol.for("UserRepository"),
    LoginService: Symbol.for("ILoginService")
};

export { TYPES };