import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
const { combine, timestamp, label, printf } = format;

const level = 'debug';

const myFormat = printf(({ level, message, label, timestamp }) => {
  return JSON.stringify({
    logLevel: level,
    message,
    timestamp,
    service: label,
  });
});

export const logger = createLogger({
  level,
  format: combine(
    label({ label: 'CHICKENS-API' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    //new transports.File({ filename: 'chickens-api.log' })
    new DailyRotateFile({
      filename: '%DATE%-chickens-api.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
});
