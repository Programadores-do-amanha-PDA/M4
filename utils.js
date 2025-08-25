// função que verifique se um número é par, retorna o número e a mensagem "é par", caso o contrário ele retorne o número e a mensagem é impar

// % (operador de resto)
function itsEven(number){
  if(number % 2 === 0){
    return `${number} é par`
  }else{
    return `${number} é ímpar`
  }
}

console.log(itsEven(4)); // => é par
console.log(itsEven(7)); // => é impar
console.log(itsEven(0)); // => é par
console.log(itsEven(-4)); // => é par

module.exports = {itsEven}