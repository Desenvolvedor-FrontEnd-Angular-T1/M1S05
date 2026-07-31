export class CarrinhoDeCompras {
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