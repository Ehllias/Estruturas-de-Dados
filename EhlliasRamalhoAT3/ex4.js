let numeros = [0, 10, 20, 30, 40];

function removerElemento(array, indice) {
    if(array.length === 0){
        console.log("Não há item a ser removido");
        return array;
    }

    if (indice < 0 || indice >= array.length) {
        console.log("Índice inválido, não é possível remover o que não existe.");
        return array;
    }

    array.splice(indice, 3);
}

removerElemento(numeros, -1);
removerElemento(numeros, 3);

console.log(`Os números que sobraram são ${numeros}.`);