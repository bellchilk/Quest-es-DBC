// Você recebe uma string que respresenta número inteiro n. Você precisa contar o número total de 
// ocorrências do digito 1 em todos os numeros não negativos menores ou iguais a n. Retornea a contagem 

const readlineSync = require('readline-sync'); 

function main(){

    let numero =  parseInt(readlineSync.question("Digite um numero: "));
    let contagem = 0;

    for(let i = 0; i <= numero; i++){

        let numeroAtual = i.toString();

        for(let j = 0; j <= numeroAtual.length; j++){
            if(numeroAtual[j] === '1'){
                contagem++;
            }
        }
    }

    console.log("O número total de ocorrências do dígito 1 é:", contagem);

}
main();