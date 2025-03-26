// src/criaturas/Tritao.ts
import { Criatura } from './Criatura';

export class Tritao implements Criatura {
  attack(): void {
    console.log("O Tritão usa suas habilidades aquáticas para atacar com rapidez!");
  }
}
