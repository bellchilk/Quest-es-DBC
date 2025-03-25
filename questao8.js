const readlineSync = require('readline-sync');

function countWordOccurrences(sentence, ...words) {// rest parament

    // Remove caracteres especiais e pontuação da frase
    const cleanedSentence = sentence.replace(/[^\w\s]/, ' '); // .replace(a,b) substitui a por b
    
    // Divide a frase em palavras individuais
    const wordsInSentence = cleanedSentence.toLowerCase().split(/\s+/); // transforma tudo em minusculo depois separa por /\s+/ e armazena em wordsInSentence
    
    // Conta as ocorrências de cada palavra buscada
    const counts = words.map(word => { // passa por cada palavra na array words e transforma para minusculo
        const lowerWord = word.toLowerCase();
        return wordsInSentence.filter(w => w === lowerWord).length; // filtra as palavras de wordsInSentence que são iguais a lowerWord e retorna a quantidade 

        //  Frase original: ["o", "gato", "o", "cachorro", "gato", "pássaro"]
        //  ↓ Filtro (w === "gato")
        //  ↓
        //  ["gato", "gato"]
        //  ↓ .length
        //  ↓
        //  2 (ocorrências)
    });
    
    // Retorna os resultados separados por pontos
    return counts.join('.');
}

function main() {
    // Lê a primeira linha (frase)
    const frase = readlineSync.question("Digite a frase: ");
    
    // Lê a segunda linha (palavras a serem contadas, separadas por espaço, hífen ou barra)
    const palavrasInput = readlineSync.question("Digite as palavras a serem contadas (separadas por espaco, hifen ou barra): ");
    
    // Divide as palavras considerando múltiplos separadores
    const palavras = palavrasInput.split(/[-\s/]/).filter(word => word.length > 0);
    
    // Chama a função de contagem
    const resultado = countWordOccurrences(frase, ...palavras);
    
    // Imprime o resultado
    console.log(resultado);
}

main();