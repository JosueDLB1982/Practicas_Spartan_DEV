// Crear una función que reciba como parámetro un array de valores numéricos y devuelva otro array númerico, cuyo contenido sean cada uno de los elementos del array dado divididos entre 2

const numbers = [10, 20, 30]
const numbers2 = [20, 50, 1000]
const numbers3 = [14, 52, 74, 96, 106]

const newNumbers = number => number.map(number=>number/2)

console.log(`El nuevo array es: [${newNumbers(numbers3).join(", ")}]`)
