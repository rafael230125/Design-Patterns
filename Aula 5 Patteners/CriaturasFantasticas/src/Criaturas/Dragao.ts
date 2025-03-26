// src/criaturas/Dragao.ts
import { Criatura } from './Criatura';

export class Dragao implements Criatura {
  attack(): void {
    console.log("O Dragão solta uma rajada de fogo!");
  }
}
