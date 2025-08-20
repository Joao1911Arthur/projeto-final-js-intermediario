import { pessoas,local } from "../banco de dados/pessoas.js";

var pesquisa = document.getElementById("barraPesquisa");
var termo = pesquisa.value.toLowerCase().trim();

if (local == null) {
    const pessoa = pessoas.find(p =>
        p.nome.toLowerCase().trim() === termo
    );
} else {
    const pessoa = local.find(p =>
        p.nome.toLowerCase().trim() === termo
    );
}


export function calcularPassagem(pessoa) {
    if (pessoa.optouVT) {
        var passagem = Math.round(0.06 * pessoa.salarioAtual);
        return passagem;
    } else {
        return 0;
    }
}