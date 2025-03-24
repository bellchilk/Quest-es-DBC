const readlineSync = require('readline-sync');

function removerZeros(array) {
    return array.filter(num => num !== 0); // Filtra e remove os zeros
}

function mesclarArrays(array1, array2) {
    return [...array1, ...array2]; // Usa o spread operator para mesclar os arrays
}

function ordenarArray(array) {
    return array.sort((a, b) => a - b); 
}

function main() {

    let tamanho1 = parseInt(readlineSync.question("Digite o tamanho do array1: "));
    if (isNaN(tamanho1) || tamanho1 <= 0) {
        console.log("Tamanho inválido para o array1.");
        return;
    }

    let array1 = [];
    console.log("Digite os elementos do array1 (separados por espaço):");
    let input1 = readlineSync.question().split(" ").map(Number); // Lê os elementos separa por espaços e converte para números
    if (input1.length !== tamanho1) {
        console.log("Número de elementos não corresponde ao tamanho informado.");
        return;
    }
    array1 = input1;

    let tamanho2 = parseInt(readlineSync.question("Digite o tamanho do array2: "));
    if (isNaN(tamanho2) || tamanho2 <= 0) {
        console.log("Tamanho inválido para o array2.");
        return;
    }

    let array2 = [];
    console.log("Digite os elementos do array2 (separados por espaço):");
    let input2 = readlineSync.question().split(" ").map(Number);
    if (input2.length !== tamanho2) {
        console.log("Número de elementos não corresponde ao tamanho informado.");
        return;
    }
    array2 = input2;

    array1 = removerZeros(array1);
    array2 = removerZeros(array2);

    let arrayResultante = mesclarArrays(array1, array2);

    arrayResultante = ordenarArray(arrayResultante);

    console.log("Array resultante:", arrayResultante.join(" "));
}

main();