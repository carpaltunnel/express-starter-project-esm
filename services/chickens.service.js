import { ChickensRepository } from '../repositories/chickens.repository.js';

export class ChickensService {
  static getChickens = () => {
    console.log('\tChickensService: getChickens()');
    return ChickensRepository.getChickens();
  }

  // getChickenById
  static getChickenById = (id) => {
    console.log(`\tChickensService: getChickenById(${id})`);
    return ChickensRepository.getChickenById(id);
  }

  // createChicken

  // replaceChicken

  // updateChicken

  // deleteChicken
}