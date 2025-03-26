import { Brinquedo } from './Brinquedo';

export class Carrinho implements Brinquedo {
  play(): void {
    console.log("Brincando com o carrinho! Ele anda rápido!");
  }
}
