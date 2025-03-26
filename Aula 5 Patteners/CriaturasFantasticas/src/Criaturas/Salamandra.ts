// src/criaturas/Salamandra.ts
import { Criatura } from './Criatura';

export class Salamandra implements Criatura {
  attack(): void {
    console.log("A Salamandra queima com seu calor intenso!");
  }
}
