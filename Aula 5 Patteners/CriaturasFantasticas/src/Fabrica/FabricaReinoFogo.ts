// src/fabrica/FabricaReinoFogo.ts
import { FabricaCriaturas } from './FabricaCriaturas';
import { Dragao } from '../Criaturas/Dragao';
import { Salamandra } from '../Criaturas/Salamandra';

export class FabricaReinoFogo implements FabricaCriaturas {
  criarDragao() {
    console.log("Criando Dragão do Reino do Fogo...");
    return new Dragao();
  }

  criarSalamandra() {
    console.log("Criando Salamandra do Reino do Fogo...");
    return new Salamandra();
  }

  criarSerpenteMarinha(): never {
    throw new Error("O Reino do Fogo não pode criar Serpente Marinha!");
  }

  criarTritao(): never {
    throw new Error("O Reino do Fogo não pode criar Tritão!");
  }
}
