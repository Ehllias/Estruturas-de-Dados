let entrada = [1,2,3,4,5];
let entrada1 = [6,7,8,9,10];
let saida = [];

function saidaDados(){
    for( let i = 0; i < entrada.length; i++){
        saida.push(entrada[i]);
        saida.push(entrada1[i]);
    };
};

saidaDados();
console.log(saida);