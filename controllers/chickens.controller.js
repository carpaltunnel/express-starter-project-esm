import { ChickensService } from '../services/chickens.service.js';
import { Constants } from '../utils/constants.js';
import { logger } from '../utils/logger.js';

export class ChickensController {
  /**
   * getChickens - Controller function for the /api/v1/chickens route
   * that fetches an array of Chickens from the db.
   * @param {Request} req - The express.js Request
   * @param {Response} res - The express.js Response
   * @param {*} next - The next() middleware
   */
  static getChickens = async (req, res, next) => {
    logger.debug('ChickensController : getChickens()');

    const result = await ChickensService.getChickens();
    res.status(200).json(result);
  };

  // getChickenById
  static getChickenById = async (req, res) => {
    const id = req.params.id;
    logger.debug(`ChickensController : getChickenById(${id})`);

    const result = await ChickensService.getChickenById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  };

  // createChicken
  static createChicken = async (req, res) => {
    logger.debug('ChickensController : createChicken()');

    if (req.file?.filename) {
      req.body.imageUrl = `${Constants.IMAGE_STATIC_PATH}${req.file.filename}`;
    }

    if (req.body?.weight) {
      req.body.weight = Number(req.body.weight) || 0;
    }

    const result = await ChickensService.createChicken(req.body);
    res.status(201).json(result);
  }

  // replaceChicken
  static replaceChicken = async (req, res) => {
    const id = req.params.id;
    logger.debug(`ChickensController : replaceChicken(${id})`);

    const result = await ChickensService.replaceChicken(id, req.body);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  // updateChicken
  static updateChicken = async (req, res) => {
    const id = req.params.id;
    logger.debug(`ChickensController : updateChicken(${id})`);

    const result = await ChickensService.updateChicken(id, req.body);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  // deleteChicken
  static deleteChicken = async (req, res) => {
    const id = req.params.id;
    logger.debug(`ChickensController : deleteChicken(${id})`);

    const result = await ChickensService.deleteChicken(id);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.sendStatus(204);
  }
}