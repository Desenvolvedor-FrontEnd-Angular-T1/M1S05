import { CarrinhoDeCompras } from './CarrinhoDeCompras.js'

class CarrinhoVip extends CarrinhoDeCompras {
  #desconto = 0.9;//10% de desconto

  setDesconto(valor) {
    this.#desconto = valor;
  }

  calcularTotalComDesconto() {
    return this.calcularTotal() * this.#desconto;
  }
}

let carrinhoVip = new CarrinhoVip();

carrinhoVip.adicionarItem('Teclado', 100);
carrinhoVip.adicionarItem('Mouse', 45);

console.log('Lista dos itens do carrinho:', carrinhoVip.listarItens());

console.log('Soma dos itens do carrinho:', carrinhoVip.calcularTotal());
console.log('Desconto default (10%)', carrinhoVip.calcularTotalComDesconto());

carrinhoVip.setDesconto(0.8); //Alterando o desconto para 20%

console.log('Novo desconto (20%)', carrinhoVip.calcularTotalComDesconto());
