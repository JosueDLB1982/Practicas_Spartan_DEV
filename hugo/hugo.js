let object ={
    result:true,
    animals:["leon","mono","gorila","leopardo","ñu","cocodrilo","hipopotamo","jirafa","bisonte"],
    type: "jungle",
    test: "available"
    };

    const jungleAnimals = (object) => {
        result = object.animals.filter((object) => object.length > 0);
        return result;
    }

   
console.log('los animales de la jungla son:',(jungleAnimals(object)));