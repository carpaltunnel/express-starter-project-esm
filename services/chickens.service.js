import { ChickensRepository } from '../repositories/chickens.repository.js';

export class ChickensService {
  static getChickens = () => {
    console.log('\tChickensService: getChickens()');
    return ChickensRepository.getChickens();
  }

  // getChickenById
  static getChickenById = () => {
    console.log('\tChickensService: getChickenById()');
    return ChickensRepository.getChickenById();
  }

  // createChicken

  // replaceChicken

  // updateChicken

  // deleteChicken
}