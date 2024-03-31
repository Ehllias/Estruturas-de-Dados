let aleatorio = [];

function adicionarEntidades(){
    aleatorio.push(Math.floor(Math.random() * 100));

};

function removerEntidade(){
    const entidadeRemovida = entidade.shift();
};


adicionarEntidades();
adicionarEntidades();
adicionarEntidades();
adicionarEntidades();
adicionarEntidades();
adicionarEntidades();
adicionarEntidades();
adicionarEntidades();

console.log(`Os números que sobraarm froam ${aleatorio}.`)