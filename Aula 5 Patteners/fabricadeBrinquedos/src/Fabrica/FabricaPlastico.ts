import { FabricaBrinquedo } from './FabricaBrinquedo';
import { Carrinho } from '../Brinquedos/Carrinho';
import { Boneca } from '../Brinquedos/Boneca';

export class FabricaPlastico implements FabricaBrinquedo {
  criarCarrinho(): Carrinho {
    console.log("Criando carrinho de plástico.");
    return new Carrinho();
  }

  criarBoneca(): Boneca {
    console.log("Criando boneca de plástico.");
    return new Boneca();
  }
}
