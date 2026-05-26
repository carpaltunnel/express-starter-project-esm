import config from 'config';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
const { combine, timestamp, label, printf } = format;

const logLevel = config.get('logLevel');

const myFormat = printf(({ level, message, label, timestamp }) => {
  return JSON.stringify({
    level: logLevel,
    message,
    timestamp,
    service: label,
  });
});

export const logger = createLogger({
  level: logLevel,
  format: combine(
    label({ label: config.get('appName') }),
    timestamp(),
  myFormat
  ),
  transports: [
    new transports.Console(),
    //new transports.File({ filename: 'chickens-api.log' })
    /*new DailyRotateFile({
      filename: '%DATE%-chickens-api.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })*/
  ]
});
