//classe: um molde para a criação de objetos
class Pessoa {
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

//Criação de uma nova classe: Professor, que herdará a classe Pessoa
//Classe Professor -> classe Filha
//Classe Pessoa -> classe Mãe 
class Professor extends Pessoa {
  materia;

  constructor(nome_herdado, idade_herdado, materia) {
    super(nome_herdado, idade_herdado); //envia os dados para o constructor da classe Mãe
    this.materia = materia;
  }
}

let pessoa = new Pessoa('Nome', 31);
let prof = new Professor('Nome Prof', 30, 'Frontend');

prof.dtNascimento = '01/01/1990';
console.log(prof);