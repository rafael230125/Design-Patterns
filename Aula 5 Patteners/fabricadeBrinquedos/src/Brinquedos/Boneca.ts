import { Brinquedo } from './Brinquedo';

export class Boneca implements Brinquedo {
  play(): void {
    console.log("Brincando com a boneca! Ela pode ser vestida e penteada!");
  }
}
