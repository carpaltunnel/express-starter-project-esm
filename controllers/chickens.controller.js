import { ChickensService } from '../services/chickens.service.js';
import { logger } from '../utils/logger.js';

export class ChickensController {
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

    const result = await ChickensService.createChicken(req.body);
    res.status(201).json(result);
  }

  // replaceChicken
  static replaceChicken = (req, res) => {
    const id = req.params.id;
    logger.debug(`ChickensController : replaceChicken(${id})`);

    const result = ChickensService.replaceChicken(id, req.body);
    res.status(200).json(result);
  }

  // updateChicken
  static updateChicken = (req, res) => {
    const id = req.params.id;
    logger.debug(`ChickensController : updateChicken(${id})`);

    const result = ChickensService.updateChicken(id, req.body);
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