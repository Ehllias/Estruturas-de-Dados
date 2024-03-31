let entidade = [];

function adicionarEntidades(entid){
    entidade.push(entid);
};

function removerEntidade(){
    const entidadeRemovida = entidade.shift();
};

adicionarEntidades(8);
adicionarEntidades(7);
adicionarEntidades(5);
adicionarEntidades(2);
removerEntidade();
adicionarEntidades(8);
adicionarEntidades(7);
removerEntidade();
adicionarEntidades(5);
adicionarEntidades(2);
removerEntidade();
removerEntidade();

console.log(`Os números que sobraarm froam ${entidade}.`)

// portanto reposta letra 'C' 