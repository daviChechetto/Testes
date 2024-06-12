// Obtém a data e hora atuais
var dataHoraAtual = new Date();
        
// Formata a data e hora
var dia = String(dataHoraAtual.getDate()).padStart(2, '0');
var mes = String(dataHoraAtual.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
var ano = dataHoraAtual.getFullYear();
var horas = String(dataHoraAtual.getHours()).padStart(2, '0');
var minutos = String(dataHoraAtual.getMinutes()).padStart(2, '0');
var segundos = String(dataHoraAtual.getSeconds()).padStart(2, '0');

// Cria uma string com a data e hora formatadas
var dataHoraFormatada = dia + '/' + mes + '/' + ano + ' às ' + horas + ':' + minutos + ':' + segundos;

// Exibe a data e hora na página
document.getElementById('data-hora-atual').textContent = 'Emitido em ' + dataHoraFormatada;


