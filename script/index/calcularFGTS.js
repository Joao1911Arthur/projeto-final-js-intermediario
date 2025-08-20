import { pessoas,local } from "../banco de dados/pessoas.js";

var pesquisa = document.getElementById("barraPesquisa");
var termo = pesquisa.value.toLowerCase().trim();

if (local == null) {
    const pessoa = pessoas.find(p =>
        p.nome.toLowerCase().trim() === termo
    );
}else{
    const pessoa = local.find(p =>
    p.nome.toLowerCase().trim() === termo
);
}

export function calcularFGTS(pessoa) {
    var FGTS = pessoa.salarioAtual * 0.08;
    return Math.round(FGTS);
}