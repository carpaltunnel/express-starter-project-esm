const CHICKENS = [
  {
    id: '1',
    name: 'Mack',
    breed: 'White Leghorn',
    weight: 1.5
  },
  {
    id: '2',
    name: 'EVOO',
    breed: 'Rhode Island Red',
    weight: 1.75
  },
  {
    id: '3',
    name: 'Mango',
    breed: 'Speckled Sussex',
    weight: 2.2
  },
  {
    id: '4',
    name: 'Bagel',
    breed: 'Black Star',
    weight: 2.6
  }
];

export class ChickensRepository {
  static getChickens = () => {
    console.log('\t\tChickensRepository: getChickens()');

    return CHICKENS;
  }

  // getChickenById
  static getChickenById = (id) => {
    console.log(`\t\tChickensRepository: getChickenById(${id})`);

    return CHICKENS.find(c => c.id === id);
  }

  // createChicken

  // replaceChicken

  // updateChicken

  // deleteChicken
}