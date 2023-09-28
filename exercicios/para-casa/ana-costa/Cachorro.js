const HistoricoMedico = require('./HistoricoMedico');

function Cachorro(nome, idade, cor,castrado,raca){
  this.nome = nome;
  this.idade = idade,
  this.cor = cor;
  this.castrado = castrado
  this.raca = raca;
  this.historico = new HistoricoMedico();

  this.latir = () => {
    console.log('AU AU!');
    console.log("  / \\__");
    console.log(" (    @\\___");
    console.log(" /         O");
    console.log("/   (_____/");
  }
}

module.exports = Cachorro