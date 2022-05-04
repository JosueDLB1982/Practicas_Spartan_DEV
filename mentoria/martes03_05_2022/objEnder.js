let person = {
    name: '',
    age: ''
}

let userName = prompt('Ingrese su nombre')
let userAge = prompt('Ingrese su edad')

person.name = userName
person.age = userAge

console.log(`Tu nombre es ${person.name} y tienes ${person.age} años`)