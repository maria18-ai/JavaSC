class Pessoas {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Óla, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    } 

}

//const pessoa1 = new Pessoa('Dudinha',18);
//const pessoa2 = new Pessoa('Jaozinho',17);

//pessoa1.saudacao();
//pessoa2.saudacao();

class Estudantes extends Pessoas {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    apresentacao() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estou no curso de ${this.curso}`);
    };
}

const pessoa3 = new Estudantes('Dudinha', 17,'Desenvolvimento');
const pessoa4 = new Estudantes('Jaozinho', 17, 'Informatica');

pessoa3.saudacao();
pessoa3.apresentacao();
pessoa4.saudacao();
pessoa4.apresentacao();

let test;
console.log(test)

const num = 2;
num = 6;
console.log(num)