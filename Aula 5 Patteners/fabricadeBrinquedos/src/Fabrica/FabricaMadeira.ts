// src/fabrica/FabricaMadeira.ts
import { FabricaBrinquedo } from './FabricaBrinquedo';
import { Carrinho } from '../Brinquedos/Carrinho';
import { Boneca } from '../Brinquedos/Boneca';

export class FabricaMadeira implements FabricaBrinquedo {
  criarCarrinho(): Carrinho {
    console.log("Criando carrinho de madeira.");
    return new Carrinho();
  }

  criarBoneca(): Boneca {
    console.log("Criando boneca de madeira.");
    return new Boneca();
  }
}
