class DadosAtletas {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {// para calcular a categoria do atleta;

        //infantil: 9 a 11 anos
        //Juvenil: 12 e 13 anos
        //Intermediário: 14 e 15 anos
        //Adulto: 16 a 30 anos
        //Sem categoria: demais idades

        if (this.idade >= 9 && this.idade <= 11) {
            return "infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }

    }

    calculaIMC() {//para calcular o IMC do atleta;
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {// para calcular a média válida do atleta.

        let _notas = this.notas.map(function (nota) {
            return nota;
        })
        _notas.sort(function(a, b){return a-b;});
        console.log("n:"+_notas);
        _notas.shift();
        _notas.pop();
        let _media = _notas.reduce(function (total, nota) {
            return total + nota;
        })
        return _media / _notas.length;

    }

    obtemNomeAtleta() {//que retorna o nome do atleta
        return this.nome;

    }

    obtemIdadeAtleta() {// que retorna a idade do atleta
        return this.idade;

    }

    obtemPesoAtleta() {// que retorna o peso do atleta
        return this.peso;

    }

    obtemNotasAtleta() {// que retorna as notas do atleta
        return this.notas;

    }

    obtemCategoria() {//que retorna a categoria do atleta
        return this.calculaCategoria();


    }

    obtemIMC() {// que retorna o IMC do atleta

        return this.calculaIMC();

    }

    obtemMediaValida() {// que retorna a média válida do atleta

        return this.calculaMediaValida();

    }

    apresentaAtleta() {
        return `
        Nome: ${this.obtemNomeAtleta()}
        Idade: ${this.obtemIdadeAtleta()}
        Peso: ${this.obtemPesoAtleta()}
        Altura: ${this.altura}
        Notas: ${this.obtemNotasAtleta()}
        Categoria: ${this.obtemCategoria()}
        IMC: ${this.obtemIMC()}
        Média válida: ${this.obtemMediaValida()}`
    }
}

// Declara o atleta
const atleta = new DadosAtletas("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
console.log(atleta.apresentaAtleta());
