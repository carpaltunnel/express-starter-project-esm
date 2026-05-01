import { logger } from '../utils/logger.js';

let CHICKENS = [
  {
    id: '1',
    name: 'Mack',
    breed: 'White Leghorn',
    weight: 1.5
  },
  {
    id: '2',
    name: 'EVOO',
    breed: 'Rhode Island Red',
    weight: 1.75
  },
  {
    id: '3',
    name: 'Mango',
    breed: 'Speckled Sussex',
    weight: 2.2
  },
  {
    id: '4',
    name: 'Bagel',
    breed: 'Black Star',
    weight: 2.6
  }
];

export class ChickensRepository {
  static getChickens = () => {
   logger.debug('ChickensRepository: getChickens()');

    return CHICKENS;
  }

  // getChickenById
  static getChickenById = (id) => {
   logger.debug(`ChickensRepository: getChickenById(${id})`);

    return CHICKENS.find(c => c.id === id);
  }

  // createChicken
  static createChicken = (newChicken) => {
   logger.debug(`ChickensRepository: createChicken()`);

    CHICKENS.push(newChicken);
    return newChicken;
  }

  // replaceChicken
  static replaceChicken = (id, replaceChicken) => {
   logger.debug(`ChickensRepository: replaceChicken()`);

    CHICKENS = CHICKENS.filter(c => c.id !== id);
    CHICKENS.push(replaceChicken);
    
    return replaceChicken;
  }

  // updateChicken
  static updateChicken = (id, updateChicken) => {
   logger.debug(`ChickensRepository: updateChicken()`);

    const chicken = CHICKENS.find(c => c.id === id);

    if (!chicken) {
      return null;
    }

    Object.keys(updateChicken).forEach((prop) => {
      chicken[prop] = updateChicken[prop];
    });

    
    return chicken;
  }

  // deleteChicken
  static deleteChicken = (id) => {
   logger.debug(`ChickensRepository: deleteChicken()`);

    const originalSize = CHICKENS.length;
    CHICKENS = CHICKENS.filter(c => c.id !== id);
    
    if (originalSize === CHICKENS.length) {
      return false;
    }
    return true;
  }
}