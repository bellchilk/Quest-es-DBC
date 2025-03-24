const readlineSync = require('readline-sync'); 

function main(){
    let tamanhoDaArray = parseInt(readlineSync.question("Digite o tamanho da Array: "));
    let elementosArray = readlineSync.question("Digite os elementos da Array (separado por vigula): ");
    let indicesTrocados = readlineSync.question("Digite os indices a serem trocados: ");
    

    let array = elementosArray.split(',');

    let [indice1, indice2] = indicesTrocados.split(',').map(Number);


    if (indice1 < 0 || indice1 >= tamanhoDaArray || indice2 < 0 || indice2>= tamanhoDaArray){
        console.log("Indices invalidos. Digite valores dentro do intervalo da Array");
        return;
    }

    let temp = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = temp;
 
    console.log(array);
}
main();