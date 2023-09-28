function HistoricoMedico(consultas, vacinas, procedimentos){
  this.consultas = consultas || [];// Inicializa com um array vazio se consultas não for fornecido
  this.vacinas = vacinas || []; // Inicializa com um array vazio se vacinas não for fornecido
  this.procedimentos = procedimentos || []; // Inicializa com um array vazio se procedimentos não for fornecido

  this.vacinar = (vacina) => {
    this.vacinas.push(vacina);
  }

  this.consultar = () => {
    let dataNovaConsulta = formataDataPadraoBR(new Date()); // O New Date cria um novo objeto Date, representando uma data e hora atual
    this.consultas.unshift(dataNovaConsulta); //adiciona a data no ínicio da array, assim o primeiro elemento da array sempre será a consulta mais recente
  }

  this.realizarProcedimento = (tipoProcedimento, motivoProcedimento) => {
      this.procedimentos.push({tipo: tipoProcedimento, motivo: motivoProcedimento});
  }
}

function formataDataPadraoBR(data) {
  //O método getDate() obtém o dia do mês a partir do objeto data. O dia é retornado como um número inteiro.
  //converte o número do dia em uma string
  //O método padStart(2, '0') é usado para garantir que a string do dia tenha sempre dois dígitos. 
  //Se o dia for menor que 10, ele adiciona um zero à esquerda. Isso ajuda a manter a formatação consistente.
  const dia = data.getDate().toString().padStart(2, '0');

  //O método getMonth() obtém o mês a partir do objeto data. O mês é retornado como um número inteiro,
  // mas deve-se lembrar que os meses em JavaScript são baseados em zero, ou seja, janeiro é 0, fevereiro é 1, e assim por diante.
  //O método padStart(2, '0') é usado para garantir que a string do dia tenha sempre dois dígitos. 
  //Se o dia for menor que 10, ele adiciona um zero à esquerda. Isso ajuda a manter a formatação consistente.
  const mes = (data.getMonth() + 1).toString().padStart(2, '0'); 

  //getFullYear(): Este método obtém o ano a partir do objeto data. Ele retorna o ano como um número inteiro de quatro dígitos.
  const ano = data.getFullYear();

  //Combina os valores de dia, mes e ano em uma única string no formato "dia/mês/ano"
  return `${dia}/${mes}/${ano}`;
}

module.exports = HistoricoMedico;