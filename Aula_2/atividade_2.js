class CarrinhoDeCompras {
  #itens = [];

  //set de #itens
  adicionarItem(nome, preco) {
    this.#itens.push({nome: nome, preco: preco});
  }

  //get de #itens
  listarItens() {
    return this.#itens;
  }

  calcularTotal() {
    let soma = 0;
    for (let item of this.#itens) {
      soma += item.preco;
    }
    return soma;
  }
}

class CarrinhoVip extends CarrinhoDeCompras {
  #desconto = 0.9;//10% de desconto

  setDesconto(valor) {
    this.#desconto = valor;
  }

  calcularTotalComDesconto() {
    return this.calcularTotal() * this.#desconto;
  }
}

class CarrinhoPremium extends CarrinhoDeCompras {
  //Polimorfismo: Sobrescrever o comportamento de um método da classe mãe
  calcularTotal() {
    let soma = 0;
    const itens = this.listarItens();
    for (let item of itens) {
      soma += item.preco;
    }
    return soma * 0.65;
    //return super.calcularTotal() * 0.65; <- o super busca o método calcularTotal() da classe mãe
    //return this.calcularTotal() * 0.65; <- resultará em um erro de looping infinito
  }
}

let carrinhoPremium = new CarrinhoPremium();

carrinhoPremium.adicionarItem('Teclado', 100);
carrinhoPremium.adicionarItem('Mouse', 45);

console.log('Lista dos itens do carrinho:', carrinhoPremium.listarItens());

console.log('Soma dos itens do carrinho:', carrinhoPremium.calcularTotal());
