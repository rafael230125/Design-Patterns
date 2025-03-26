import { Brinquedo } from '../Brinquedos/Brinquedo';

export interface FabricaBrinquedo {
  criarCarrinho(): Brinquedo;
  criarBoneca(): Brinquedo;
}
