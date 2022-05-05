// logger.ts
import winston, { createLogger, transports, format } from 'winston';
import 'dotenv/config'

interface TransformableInfo {
  level: string;
  message: string;
  [key: string]: any;
}

//여기서 elk 연결 설정 진행하면 됨. 아직 안함.
const logDir = 'logs';  // logs 디렉토리 하위에 로그 파일 저장

const logger = createLogger({
  transports: [
    new transports.File({
      dirname: logDir,
      filename: `%DATE%.log`,
      level: 'info',
      maxFiles: 10,
      zippedArchive: true,
      format: format.combine(
        format.label({ label: '[info]' }),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.colorize(),
        format.printf((info: TransformableInfo) => `${info.timestamp} - ${info.level}: ${info.label} ${JSON.stringify(info.message)}`),
      )
    }),
    new transports.File({
      dirname: logDir + '/error',
      filename: `%DATE%.error.log`,
      level: 'error',
      maxFiles: 10,
      zippedArchive: true,
      format: format.combine(
        format.label({ label: '[error]' }),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.colorize(),
        format.printf((info: TransformableInfo) => `${info.timestamp} - ${info.level}: ${info.label} ${JSON.stringify(info.message)}`),
      )
    }),
  ]
});

//Production 환경이 아닌 경우(dev 등) 
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({      
      format: format.combine(
        format.label({ label: '[console]' }),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.colorize(),
        format.printf((info: TransformableInfo) => `${info.timestamp} - ${info.level}: ${info.label} ${JSON.stringify(info.message)}`),
      )
    })    
  );
}

export default logger;