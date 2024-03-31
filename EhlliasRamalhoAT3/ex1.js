let numeros = [10, 20, 30, 40];

function removeElemento(array, indice) {
    array.splice(indice, 1);
}

removeElemento(numeros, 0);
removeElemento(numeros, 1);
removeElemento(numeros, 1);

console.log(`O número que sobrou é o ${numeros}.`);