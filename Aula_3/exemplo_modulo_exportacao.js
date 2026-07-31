//exportação da classe Pessoa
export class Pessoa {
  nome;
  idade;
  dtNascimento;

  //inicialização de valores 
  constructor(nome_parametro, idade_parametro) {
    this.nome = nome_parametro;
    this.idade = idade_parametro;
  }

  saudacao() {
    console.log('Olá, meu nome é:', this.nome);
  }
}