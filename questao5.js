// Elabore um algoritmo que com base em uma string coma idade de uma pessoa expressa em anos, meses e dias, ou seja, 20,06,15
// retorne a idade dessa pessoa expressa apenas em dias
const readlineSync = require('readline-sync');

function main(){

    let idade = readlineSync.question("Digite ano,meses,dia (ex: 20,06,15) de nascimento: ");
   
    let array = idade.split(',');

    let ano = parseInt(array[0]);
    let mes = parseInt(array[1]);
    let dia = parseInt(array[2]);

    let totalDias = ano *365 + mes*30 + dia;
   
   
    console.log(totalDias);
}
main();