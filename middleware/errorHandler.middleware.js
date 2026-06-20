import { logger } from '../utils/logger.js';

export const errorHandlerMiddleware = (err, req, res, next) => {
  logger.error(`errorHandlerMiddleware invoked with error : ${err.message}`);

  // Generic validation error
  if (Array.isArray(err) && err[0].schemaPath) {
    res.status(400).json(err);
    return next();
  }

  res.status(500).json({
    error: 'An internal error occurred.... sorry.'
  });

  next();
  return;
}