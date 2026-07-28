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

let carrinho = new CarrinhoDeCompras();

carrinho.adicionarItem('Teclado', 100);
carrinho.adicionarItem('Mouse', 45);

console.log(carrinho.listarItens());

console.log(carrinho.calcularTotal());