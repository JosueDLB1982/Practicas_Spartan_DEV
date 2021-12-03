/* Josue
Hacer una funcion que reciba como parametro un string correspondiente al formato de un correo electronico, la funcion debe validar el formato de correo electronico palabra@dominio.extension(com,net,cl,etc) , la validacion debe devolver true si cumple o false de lo contrario 
Ejemplo : 
entrada : oliverprada86@gmail.com -> true
entrada : oli##$$%@gmail.com false -> false
entrada : oliverprada86@gmail.complacencia -> false
*/

const validarEmail = (email) => {
    let regexExpresions = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,3})$/
    if (regexExpresions.exec(email)) {
        return true;
    }
    else {
        return false;
    };
}
console.log(validarEmail("josuejk78@gmail.com"))