
const readlineSync = require('readline-sync');

function main(){
    let total = 0;
    const recursosEssenciais = [
        101,535,157,2005,
        335,456,7896,1236,
        3587,1258,5986,4586, 
        8965,4785,789624,56328
    ];

    for(let i= 0; i < recursosEssenciais.length; i++){
        total += recursosEssenciais[i];
    }
   
    console.log(total);
}
main();