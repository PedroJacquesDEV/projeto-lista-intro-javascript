// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt('Digite  a altura!')
  const largura = prompt('digite a largura!')
  const area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Digite o ano atual!')
  const anoDeNascimento = prompt('digite o ano de nascimento!')
  console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome!')
  const idade = prompt('Digite sua idade!')
  const email = prompt('digite seu email!')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)  
}
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Qual é a sua primeira cor favorita?')
  const cor2 = prompt('Qual é  a sua segunda cor favorita?')
  const cor3 = prompt('Qual é a sua terceira cor favorita?')
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length; 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0];
  const ultimoElemento = array[array.length - 1];
  array[0] = ultimoElemento;
  array[array.length - 1] = primeiroElemento;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Qual o ano atual?')
  const anoDeNascimento = prompt('Qual o ano de nascimento?')
  const AnoEmissaoCarteira = prompt('Qual o ano você emitiu sua carteira?')

  const tempoDeEmissao = anoAtual - AnoEmissaoCarteira
  const idade = anoAtual - anoDeNascimento

  const exemplo1 = idade <= 20 && tempoDeEmissao >= 5
  const exemplo2 = idade > 20 && idade <=  50 && tempoDeEmissao >= 10
  const exemplo3 = idade > 50 && tempoDeEmissao >= 15

  const resultado = exemplo1 || exemplo2 || exemplo3
  return console.log(resultado)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiplo400 = ano % 400 == 0
  const multiplo4 = ano % 4 == 0
  const naomultiplo = ano % 100 != 0

  ano = multiplo400 || (multiplo4 && naomultiplo)
  
  return ano
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const p1 = prompt('tem mais de 18?')
  const p2 = prompt('tem ensino médio completo?')
  const p3 = prompt('tem disponibilidade de horários?')

  const resultado1 = p1 === "sim"
  const resultado2 = p2 === "sim"
  const resultado3 = p3 === "sim"

  const resultadoTotal = resultado1 && resultado2 && resultado3
  return console.log(resultadoTotal)
}