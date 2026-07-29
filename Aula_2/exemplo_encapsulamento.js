//classe: um molde para a criação de objetos
class Pessoa {
  nome;
  #idade;

  //inicialização de valores 
  constructor(nome_parametro, idade_parametro) {
    this.nome = nome_parametro;
    this.#idade = idade_parametro;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e eu possuo ${this.#idade} anos`);
  }

  getIdade() {
    return this.#idade;
  }

  setIdade(idade) {
    this.#idade = idade;
  }
}

//objetos são a instanciação da classe Pessoa
let pessoa_1 = new Pessoa('Eduardo', 30);
//pessoa_1.nome = 12345654;
//pessoa_1.#idade = '31'; <- Retorna um erro pois a propriedade #idade é privada
pessoa_1.setIdade(31);
console.log(pessoa_1.getIdade());
//pessoa_1.saudacao();