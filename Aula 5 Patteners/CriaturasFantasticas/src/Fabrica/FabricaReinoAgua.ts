// src/fabrica/FabricaReinoAgua.ts
import { FabricaCriaturas } from './FabricaCriaturas';
import { SerpenteMarinha } from '../Criaturas/SerpenteMarinha';
import { Tritao } from '../Criaturas/Tritao';

export class FabricaReinoAgua implements FabricaCriaturas {
  criarDragao(): never {
    throw new Error("O Reino da Água não pode criar Dragão!");
  }

  criarSalamandra(): never {
    throw new Error("O Reino da Água não pode criar Salamandra!");
  }

  criarSerpenteMarinha() {
    console.log("Criando Serpente Marinha do Reino da Água...");
    return new SerpenteMarinha();
  }

  criarTritao() {
    console.log("Criando Tritão do Reino da Água...");
    return new Tritao();
  }
}
