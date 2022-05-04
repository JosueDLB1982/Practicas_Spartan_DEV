// Crear un algoritmo que valide sin un animal es perro o gato

let animal = "gato";
const identificarAnimal = (animal) => {
    if (animal == "perro") {
        return console.log("es un: ",animal);
    } else if (animal == "gato") {
        return console.log("es un: ",animal);
    } else {
        return console.log("no es ni perro ni gato, es un: ",animal);
    }

}
identificarAnimal(animal);