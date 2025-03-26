// src/cliente/index.ts
import { FabricaReinoFogo } from '../Fabrica/FabricaReinoFogo';
import { FabricaReinoAgua } from '../Fabrica/FabricaReinoAgua';

function testarCriaturas(fabrica: any): void {
  const dragao = fabrica.criarDragao();
  const salamandra = fabrica.criarSalamandra();

  dragao.attack();
  salamandra.attack();
}

console.log("Usando a fábrica do Reino do Fogo:");
const fabricaFogo = new FabricaReinoFogo();
testarCriaturas(fabricaFogo);

console.log("\nUsando a fábrica do Reino da Água:");
const fabricaAgua = new FabricaReinoAgua();
testarCriaturas(fabricaAgua);
