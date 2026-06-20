import { Constants } from '../utils/constants.js';
import { database } from '../utils/database.js';
import { logger } from '../utils/logger.js';

export class ChickensRepository {
  /**
   * 
   * @returns An array of Chicken objects
   */
  static getChickens = () => {
    logger.debug('ChickensRepository: getChickens()');

    return database.db.collection(Constants.CHICKENS_COLLECTION).find(
      {},
      {
        projection: {
          _id: 0,
        }
      }
    ).toArray();
  }

  /**
   * getChickenById - Fetch one document from Mongo that has an `id` property
   *  that matches the "id" parameter.
   * @param {String} id - the UUID of a particular document
   * @returns {Object | null} - An object representing a single chicken
   */
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
  static replaceChicken = async (id, replaceChicken) => {
    logger.debug(`ChickensRepository: replaceChicken()`);

    const result = await database.db.collection(Constants.CHICKENS_COLLECTION).replaceOne({
      id,
    }, replaceChicken);

    if (result.matchedCount === 0) {
      return false;
    }

    return replaceChicken;
  }

  // updateChicken
  static updateChicken = async (id, updateChicken) => {
    logger.debug(`ChickensRepository: updateChicken()`);

    const updateStatement = {
      $set: {},
    };

    Object.keys(updateChicken).forEach((key) => {
      updateStatement.$set[key] = updateChicken[key]; //name: updateChicken.name
    });

    const result = await database.db.collection(Constants.CHICKENS_COLLECTION).findOneAndUpdate({
      id,
    },
      updateStatement,
      {
        returnDocument: 'after',
      }
    );

    if (result) {
      delete result._id;
    }

    return result;
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