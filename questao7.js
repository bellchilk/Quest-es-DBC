// Crie um programa que receba uma lista(array), contendo nomes e ao final um número. 
// Os nomes formam uma lista de alunos, e o número ao final deve retornar a posição correspondente na lista.
// // considere que o número enviado é válido (não é um número negativo, nem um número maior do que o tamnaho da lista)

const readlineSync = require('readline-sync');

function main(){

    let lista = readlineSync.question("Digite os nomes separado por virgula: ");

    let partes = lista.split(',') // Divide a string onde tem virgulas
    
    let indice = parseInt(partes[partes.length - 1]) // (partes.length) = tamanho do array

    let nomes = partes.slice(0, -1);// Faz uma copia a partir de uma subarray criada entre as posições 0,-1 (inicio e fim)

    if(indice < 0 || indice >= lista.length){
        console.log(" O numero inserido é invalido!");
       return;
    }

    let nomeSaida = nomes[indice];
    console.log(nomeSaida);

    
}
main();