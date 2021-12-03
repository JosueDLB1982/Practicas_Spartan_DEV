// const array = [95, 8, 7, 23, 1, 150, 35, 42]
// const arrayOrdenado = array.sort((a,b) => b-a)
// console.log(arrayOrdenado)

// let name = ['Josue']
// let lastName = ['Lopez']
// let age = [39]
// console.log(`Hola mi nombre es ${name} ${lastName} y tengo ${age} de edad`)

//const array1 = ['a', 'b', 'c'];
//const array2 = ['d', 'e', 'f'];
//const array3 = array1.concat(array2).join(' ? ');

//console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

//const array1 = [1, 2, 3, 4];
//const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer));
// expected output: 10
const reducer = (previousValue, currentValue) => previousValue + currentValue
const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = array1.concat(array2).reduce(reducer)
console.log(array3)

// 5 + 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer, 5));
// expected output: 15
