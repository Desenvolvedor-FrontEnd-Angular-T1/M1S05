//classe: um molde para a criação de objetos
class Pessoa {
  nome;
  idade;

  //inicialização de valores 
  constructor(nome_parametro, idade_parametro) {
    this.nome = nome_parametro;
    this.idade = idade_parametro;
  }

  saudacao() {
    console.log('Olá, meu nome é:', this.nome);
  }
}

//objetos são a instanciação da classe Pessoa
let pessoa_1 = new Pessoa('Eduardo', '30');
//pessoa_1.nome = 'Eduardo';
//pessoa_1.idade = '30';
pessoa_1.saudacao();

let pessoa_2 = new Pessoa('Rodrigues', '31');
pessoa_2.saudacao();
pessoa_2.nome = 'Silva';
//pessoa_2.idade = '31';
pessoa_2.saudacao();