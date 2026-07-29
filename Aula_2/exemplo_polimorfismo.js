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
  #materias = [];

  constructor(nome_herdado, idade_herdado) {
    super(nome_herdado, idade_herdado); //envia os dados para o constructor da classe Mãe
  }

  //set para #materias
  adicionarMateria(materia) { 
    this.#materias.push(materia);
  }

  //get para #materias
  retornarMaterias() {
    return this.#materias;
  }

  saudacao() {
    console.log('Olá, eu sou o Profº:', this.nome);
  }
}

let prof = new Professor('Nome Prof', 30);

prof.adicionarMateria('Angular');
prof.adicionarMateria('HTML');
prof.adicionarMateria('JS');

//console.log(prof.retornarMaterias());
prof.saudacao();