const HistoricoMedico = require('./HistoricoMedico');

function Gato(nome, idade, cor, castrado){
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.historico = new HistoricoMedico();

  this.miar = () => {
    console.log('MIAU!')
    console.log("  /\\_/\\ ");
    console.log(">( o.o )<");
  }
}

module.exports = {Gato}

