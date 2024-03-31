let tarefas = ["Tarefa 1", "Tarefa 2", "Tarefa 3"];

function inserirTarefa(tarefa) {
    if (tarefa) {
        tarefas.push(tarefa);
        console.log(`Tarefa inserida: ${tarefa}`);
    }
}

function excluirTarefa(indice) {
    if (indice < 0 || indice >= tarefas.length) {
        console.log("Índice inválido, tarefa não existe.");
        return indice;
    }

    let tarefaRemovida = tarefas.splice(indice, 1);
    console.log(`Tarefa removida: ${tarefaRemovida[0]}`);
}

function listarTarefas() {
    console.log("Lista de tarefas:");
    for (let i = 0; i < tarefas.length; i++) {
        console.log((i + 1) + " - " + tarefas[i]);
    }
}

function escolherOpcao() {
    let opcao = prompt("Escolha uma opção:\n1 - Inserir tarefa\n2 - Excluir tarefa\n3 - Listar tarefas\n4 - Sair");

    switch (opcao) {
        case "1":
            let tarefa = prompt("Insira a tarefa:");
            inserirTarefa(tarefa);
            break;
        case "2":
            let indice = prompt("Insira o índice da tarefa a ser removida:");
            excluirTarefa(parseInt(indice));
            break;
        case "3":
            listarTarefas();
            break;
        case "4":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida, tente novamente.");
            escolherOpcao();
    }
}

escolherOpcao();