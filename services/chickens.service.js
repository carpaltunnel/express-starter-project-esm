import { v4 as uuid } from 'uuid';
import AJV from 'ajv';
import addFormats from 'ajv-formats';
import { ChickensRepository } from '../repositories/chickens.repository.js';
import { logger } from '../utils/logger.js';
import chickenSchema from '../schemas/chicken.schema.json' with { type: 'json' };

const ajv = new AJV();
addFormats(ajv);
const validate = ajv.compile(chickenSchema);

export class ChickensService {
  static getChickens = () => {
    logger.debug('ChickensService: getChickens()');
    return ChickensRepository.getChickens();
  }

  // getChickenById
  static getChickenById = (id) => {
    logger.debug(`ChickensService: getChickenById(${id})`);
    return ChickensRepository.getChickenById(id);
  }

  // createChicken
  static createChicken = (newChicken) => {
    logger.debug(`ChickensService: createChicken()`);

    newChicken.id = uuid();
    const valid = validate(newChicken);
    if (!valid) {
      throw validate.errors;
    }

    return ChickensRepository.createChicken(newChicken);
  }

  // replaceChicken
  static replaceChicken = (id, replaceChicken) => {
    logger.debug(`ChickensService: replaceChicken()`);

    replaceChicken.id = id;
    return ChickensRepository.replaceChicken(id, replaceChicken);
  }

  // updateChicken
  static updateChicken = (id, updateChicken) => {
    logger.debug(`ChickensService: updateChicken()`);

    updateChicken.id = id;
    return ChickensRepository.updateChicken(id, updateChicken);
  }

  // deleteChicken
  static deleteChicken = (id) => {
    logger.debug(`ChickensService: deleteChicken()`);

    return ChickensRepository.deleteChicken(id);
  }
}