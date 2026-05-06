import { logger } from '../utils/logger.js';

export const errorHandlerMiddleware = (err, req, res, next) => {
  logger.error(`errorHandlerMiddleware invoked with error : ${err.message}`);

  res.status(500).json({
    error: 'An internal error occurred.... sorry.'
  });

  next();
  return;
}