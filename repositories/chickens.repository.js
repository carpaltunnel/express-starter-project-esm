export class ChickensRepository {
  static getChickens = () => {
    console.log('\t\tChickensRepository: getChickens()');
    
    return {
      chickens: [],
    };
  }
}