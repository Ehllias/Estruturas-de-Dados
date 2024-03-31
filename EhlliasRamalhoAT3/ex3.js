let numeros = [10, 20, 30, 40];

function Elemento(array, indice) {
    if (indice < 0 || indice >= array.length) {
        console.log("Índice inválido porque o índice não existe. Tente novamente.");
        return;
    }

    return array[indice];
}

function adicionarItem(array, indice, novoValor) {
    if (indice < 0 || indice > array.length) {
        console.log("Índice inválido porque pulou índices. Tente novamente.");
        return;
    }

    array.splice(indice, 0, novoValor);
}

adicionarItem(numeros, 4, 50);
//adicionarItem(numeros, 5, 60);

console.log(Elemento(numeros, 1));
console.log(Elemento(numeros, 4));
console.log(Elemento(numeros, 5));