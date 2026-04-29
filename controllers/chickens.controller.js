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

  // replaceChicken

  // updateChicken

  // deleteChicken
}