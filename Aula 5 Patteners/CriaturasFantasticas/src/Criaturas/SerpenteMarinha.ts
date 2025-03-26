// src/criaturas/SerpenteMarinha.ts
import { Criatura } from './Criatura';

export class SerpenteMarinha implements Criatura {
  attack(): void {
    console.log("A Serpente Marinha ataca com seus dentes afiados e seu veneno!");
  }
}
