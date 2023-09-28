const HistoricoMedico = require('./HistoricoMedico');

function AnimalExotico(nome, idade, cor, especie,adulto){
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.adulto = adulto;
  this.historico = new HistoricoMedico();

  this.ehAdulto = () => {
    switch (this.especie) {
      case 'Hamster':
        return this.idade >= 2;
      case 'Papagaio':
        return this.idade >= 36; // 3 anos em meses
      case 'Calopsita':
        return this.idade >= 18;
      default:
        throw new Error("Espécie não reconhecida. Esta função suporta apenas as espécies: Hamster, Papagaio e Calopsita.");
    }
  }

}