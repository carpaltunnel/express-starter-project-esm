import { ChickensRepository } from '../repositories/chickens.repository.js';

export class ChickensService {
  static getChickens = () => {
    console.log('\tChickensService: getChickens()');
    return ChickensRepository.getChickens();
  }
}