import { ChickensService } from '../services/chickens.service.js';

export class ChickensController {
  static getChickens = (req, res) => {
    console.log('ChickensController : getChickens()');
    
    const result = ChickensService.getChickens();
    res.status(200).json(result);
  };

  // getChickenById
  static getChickenById = (req, res) => {
    console.log('ChickensController : getChickenById()');
    
    const result = ChickensService.getChickenById();
    res.status(200).json(result);
  };

  // createChicken

  // replaceChicken

  // updateChicken

  // deleteChicken
}