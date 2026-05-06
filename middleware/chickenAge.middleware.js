import { logger } from '../utils/logger.js';

export const chickenAgeMiddleware = (req, res, next) => {
  logger.info('chickenAgeMiddleware invoked');

  if (!req.body.age) {
    logger.warn('chickenAgeMiddleware: no age property, calling next()');
    next();
    return;
  }

  logger.info(`chickenAgeMiddleware: req.body.age = ${req.body.age}`);

  // Validation
  if (typeof req.body.age !== 'number') {
    res.status(400).json({
      error: 'age property must be a number',
    });
    return;
  }


  if (req.body.age < 1) {
    req.body.ageDescription = 'chick';
  } else if (req.body.age >= 1 && req.body.age < 3) {
    req.body.ageDescription = 'teen';
  } else if (req.body.age >= 3 && req.body.age < 4) {
    req.body.ageDescription = 'adult';
  } else if (req.body.age >= 4) {
    req.body.ageDescription = 'old';
  }

  logger.info(`chickenAgeMiddleware: labeled chicken with age ${req.body.age} as ageDescription = ${req.body.ageDescription}`);
  next();
  return;
}