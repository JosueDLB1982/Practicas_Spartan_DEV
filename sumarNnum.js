/* 
    crear una función que sume n argumentos

    El objeto arguments sólo puede ser usado con funciones declarativas
*/


/* 
    Usando el objeto arguments y un ciclo for
*/
function sum() {
    if (arguments.length === 0) {
      return 0;
    }
    let suma=0;
    for (let i = 0; i < arguments.length; i++) {
      suma+= arguments[i];
    }
    return suma;
  }
console.log(`La sumatoria de los números ingresados es ${sum(1, 2, 3)}`)

console.log()

/* 
  Usando el objeto arguments i un for in
*/
function sumar() {
    let total = 0
    for(let num in arguments) {
        total += arguments[num]
    }
    return total
}
console.log(`La sumatoria de los números ingresados es ${sumar(1, 2, 3)}`)

console.log()

console.log('usando reduce y spread operator')
const sum2 = (...n) => n.reduce((a,b) => a+b)
console.log(`La sumatoria de los números ingresados es ${sum2(1, 2, 3, 6)}`)


