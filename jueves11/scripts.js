// let palabras = ["Josue", "Hola ", "Lopez ", "estas?", "cómo "]
// palabras.reverse()
// console.log(palabras)

// const animals = [
//     {name:"Cardenal y Pato", legs:"Dos patas", caracter:"Vuelan"},
//     {name:"Gato y Leopardo", legs:"Cuatro patas", caracter:"Corren"},
// ]

// alert("Bienvenido")


// const animalSelec = prompt("¿Quieres que aparezcan animales de dos patas")

//         if (animalSelec == "Cuatro patas"){
//             const selec = animals.map (animal =>  {
//             return (animals[0]);
//             })
//             console.log (animals[0])};

//         if (animalSelec == "Dos patas"){
//             const selec = animals.map (animal => {
//             return (animals[1]);
//             })
//             console.log (animals[1])};

const animals = ['cardenal', 'gato', 'pato', 'perro']
const determinarNumeroDePatas = (animal) => {
    switch(animal) {
        case 'cardenal': console.log(`${animal} es vípedo`)
        break
        case 'gato': console.log(`${animal} es cuadrúpedo`)
        break
        case 'pato': console.log(`${animal} es vípedo`)
        break
        case 'perro': console.log(`${animal} es cuadrúpedo`)
        break
        default: console.log('No conozco el animal que me has nombrado')
    }
}
determinarNumeroDePatas('gatos')


