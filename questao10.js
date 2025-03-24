// O que é a Distância de Levenshtein?
// A distância de Levenshtein é uma medida de quantas operações são necessárias para transformar uma string em outra. As operações permitidas são:

// Inserção: Adicionar um caractere à string.
// Exclusão: Remover um caractere da string.
// Substituição: Substituir um caractere por outro.

const readlineSync = require('readline-sync');

function minDistancia(s1,s2){
    const m = s1.length;
    const n = s2.length;
    const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    return dp[m][n];

}

function main(){

    let string1 = readlineSync.question("Digite uma string1: ");
    let string2 = readlineSync.question("Digite uma string2: ");

    let result = minDistancia(string1, string2);
    console.log(result);
    
}
main();