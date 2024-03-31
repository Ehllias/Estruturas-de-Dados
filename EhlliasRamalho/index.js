let pessoas = [];
let queueIsEmpty = true;

// Adicionar
function adicionar(nome) {
  pessoas.push(nome);
  console.log(`${nome} Item adicionado a fial.`);
  queueIsEmpty = false;
}

// Remover
function removedFila() {
  if (pessoas.length === 0) {
    console.log("Fila vazia. Nnhum item encontrado.");
    return  "fila Vazia";
  }

  const removedNome = pessoas.shift();
  console.log(`Item ${removedNome} não encontrado na fila.`);
  queueIsEmpty = (pessoas.length === 0) ;

  const removedNome1 = pessoas.shift();
  console.log(`Item ${removedNome1} não encontrado na fila.`);
  queueIsEmpty = (pessoas.length === 0) ;
  
  const removedNome2 = pessoas.shift();
  console.log(`Item ${removedNome2} não encontrado na fila.`);
  queueIsEmpty = (pessoas.length === 0) ;
}

// Mostrar o removido
function mostrarRemovido(item) {
  if (item) {
    console.log(`Item removido ${item}`);
  } else {
    console.log("Nenhum item removiod.");
  }
}

// Mostrar item
function mostrarFila() {
  console.log("Atualmente na fila: ", pessoas);
}

adicionar("10");
adicionar("20");
adicionar("30");
adicionar("40");
adicionar("50");
adicionar("60");
adicionar("70");
adicionar("80");
adicionar("90");
adicionar("100");

mostrarFila(pessoas);
removedFila(pessoas[0,1,2]);
mostrarRemovido();
mostrarFila(pessoas)

while (queueIsEmpty) {
  pessoas[0] = pessoas[pessoas.length - 1];
  pessoas.pop();
  mostrarFila();
  removedFila();
  mostrarRemovido(pessoas[0]);
}