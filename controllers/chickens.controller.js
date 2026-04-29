import { ChickensService } from '../services/chickens.service.js';

export class ChickensController {
  static getChickens = (req, res) => {
    console.log('ChickensController : getChickens()');
    
    const result = ChickensService.getChickens()
    res.status(200).json(result);
  };
}