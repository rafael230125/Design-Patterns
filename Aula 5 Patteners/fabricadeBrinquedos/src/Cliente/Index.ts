import { FabricaPlastico } from '../Fabrica/FabricaPlastico';
import { FabricaMadeira } from '../Fabrica/FabricaMadeira';

function testarFabrica(fabrica: any): void {
  const carrinho = fabrica.criarCarrinho();
  const boneca = fabrica.criarBoneca();

  carrinho.play();
  boneca.play();
}

console.log("Usando a fábrica de plástico:");
const fabricaPlastico = new FabricaPlastico();
testarFabrica(fabricaPlastico);

console.log("\nUsando a fábrica de madeira:");
const fabricaMadeira = new FabricaMadeira();
testarFabrica(fabricaMadeira);
