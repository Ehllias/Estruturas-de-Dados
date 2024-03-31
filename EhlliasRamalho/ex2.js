let entrada = [];
let saida = [];

function adicionar(elementos){
    entrada.push(elementos);
};

function inverter(){
    for (let i = entrada.length - 1; i >= 0; i--){
        saida.push(entrada[i]);
    };
};

adicionar(1);
adicionar(2);
adicionar(3);
adicionar(4);
adicionar(5);

inverter();
console.log(saida);