import { ChickensService } from '../services/chickens.service.js';

export class ChickensController {
  static getChickens = (req, res) => {
    console.log('ChickensController : getChickens()');
    
    const result = ChickensService.getChickens();
    res.status(200).json(result);
  };

  // getChickenById
  static getChickenById = (req, res) => {
    const id = req.params.id;
    console.log(`ChickensController : getChickenById(${id})`);

    const result = ChickensService.getChickenById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.sendStatus(404);
    }
  };

  // createChicken
  static createChicken = (req, res) => {
    console.log('ChickensController : createChicken()');

    const result = ChickensService.createChicken(req.body);
    // TODO: UPDATE THIS
    res.status(200).json(result);
  }

  // replaceChicken
  static replaceChicken = (req, res) => {
    const id = req.params.id;
    console.log(`ChickensController : replaceChicken(${id})`);

    const result = ChickensService.replaceChicken(id, req.body);
    res.status(200).json(result);
  }

  // updateChicken
  static updateChicken = (req, res) => {
    const id = req.params.id;
    console.log(`ChickensController : updateChicken(${id})`);

    const result = ChickensService.updateChicken(id, req.body);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(result);
  }

  // deleteChicken
  static deleteChicken = (req, res) => {
    const id = req.params.id;
    console.log(`ChickensController : deleteChicken(${id})`);

    const result = ChickensService.deleteChicken(id);
    if (!result) {
      res.sendStatus(404);
      return;
    }

    res.sendStatus(200);
  }
}