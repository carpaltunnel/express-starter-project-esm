import { v4 as uuid } from 'uuid';
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
  static createChicken = (newChicken) => {
    console.log(`\tChickensService: createChicken()`);

    newChicken.id = uuid();
    return ChickensRepository.createChicken(newChicken);
  }

  // replaceChicken
  static replaceChicken = (id, replaceChicken) => {
    console.log(`\tChickensService: replaceChicken()`);

    replaceChicken.id = id;
    return ChickensRepository.replaceChicken(id, replaceChicken);
  }

  // updateChicken
  static updateChicken = (id, updateChicken) => {
    console.log(`\tChickensService: updateChicken()`);

    updateChicken.id = id;
    return ChickensRepository.updateChicken(id, updateChicken);
  }

  // deleteChicken
}