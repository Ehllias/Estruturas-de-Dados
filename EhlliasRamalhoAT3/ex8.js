let lista1 = [0, 10, 20, 30, 40, 50];
let lista2 = [10, 20, 30, 40, 50];

function maiorLista(lista1, lista2) {
    if (lista1.length > lista2.length) {
        console.log(`A primeira lista é a maior com o tamanho de ${lista1.length} elementos.`);
    } else if (lista1.length < lista2.length) {
        console.log(`A segunda lista é a maior com o tamanho de ${lista2.length} elementps.`);
    } else {
        console.log(`As listas têm o mesmo tamanho: ${lista1.length}`);
    }
}

maiorLista(lista1, lista2);

console.log(`Os itens da primeira lista são ${lista1}.  E os da segunda são ${lista2}.`);