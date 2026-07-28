class CarrinhoDeCompras {
  itens = [];

  adicionarItem(nome, preco) {
    this.itens.push({nome: nome, preco: preco});
  }

  listarItens() {
    return this.itens;
  }

  calcularTotal() {
    let soma = 0;
    for (let item of this.itens) {
      soma += item.preco;
    }
    return soma;
  }
}

class CarrinhoVip extends CarrinhoDeCompras {
  desconto = 0.9;//10% de desconto

  calcularTotalComDesconto() {
    return this.calcularTotal() * this.desconto;
  }
}

let carrinhoVip = new CarrinhoVip();

carrinhoVip.adicionarItem('Teclado', 100);
carrinhoVip.adicionarItem('Mouse', 45);

console.log(carrinhoVip.listarItens());
console.log(carrinhoVip.calcularTotal());
console.log(carrinhoVip.calcularTotalComDesconto());