// src/fabrica/FabricaCriaturas.ts
import { Criatura } from '../Criaturas/Criatura';

export interface FabricaCriaturas {
  criarDragao(): Criatura;
  criarSalamandra(): Criatura;
  criarSerpenteMarinha(): Criatura;
  criarTritao(): Criatura;
}
