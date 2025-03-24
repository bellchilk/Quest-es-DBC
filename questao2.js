// Você recebe uma string contendo letras maiúsculas e minúsculas. Sua tarefa é converter todas as 
// letras maiscúlas da entrada em letras minúsculas correspondentes 
const readlineSync = require('readline-sync');

function main(){
    let str;

    str = readlineSync.question("Digite algo:");

    let resultado = str.toLowerCase();
    console.log(resultado);

    
}
main();