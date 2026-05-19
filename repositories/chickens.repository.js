import { Constants } from '../utils/constants.js';
import { database } from '../utils/database.js';
import { logger } from '../utils/logger.js';

let CHICKENS = [
  {
    id: '1',
    name: 'Mack',
    breed: 'White Leghorn',
    weight: 1.5,
    age: 1,
  },
  {
    id: '2',
    name: 'EVOO',
    breed: 'Rhode Island Red',
    weight: 1.75,
    age: 2,
  },
  {
    id: '3',
    name: 'Mango',
    breed: 'Speckled Sussex',
    weight: 2.2,
    age: 3,
  },
  {
    id: '4',
    name: 'Bagel',
    breed: 'Black Star',
    weight: 2.6,
    age: 4,
  }
];

export class ChickensRepository {
  static getChickens = () => {
    logger.debug('ChickensRepository: getChickens()');

// TODO: Suppress _id
    return database.db.collection(Constants.CHICKENS_COLLECTION).find(
      {},
      {
        projection: {
          _id: 0,
        }
      }
    ).toArray();
  }

  // getChickenById
  static getChickenById = (id) => {
    logger.debug(`ChickensRepository: getChickenById(${id})`);

    return database.db.collection(Constants.CHICKENS_COLLECTION).findOne(
      { id },  // { id: id }
      {
        projection: {
          _id: 0,
        }
      }
    );
  }

  // createChicken
  static createChicken = async (newChicken) => {
    logger.debug(`ChickensRepository: createChicken()`);

    await database.db.collection(Constants.CHICKENS_COLLECTION).insertOne(newChicken);
    delete newChicken._id;
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
  static deleteChicken = async (id) => {
    logger.debug(`ChickensRepository: deleteChicken()`);

    const result = await database.db.collection(Constants.CHICKENS_COLLECTION).deleteOne({
      id, //id: id
    });

    return result.deletedCount === 0 ? false : true;
  }
}