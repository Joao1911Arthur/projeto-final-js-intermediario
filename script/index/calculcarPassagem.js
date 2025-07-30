import { pessoas } from "../banco de dados/pessoas.js";

var pesquisa = document.getElementById("barraPesquisa");
var termo = pesquisa.value.toLowerCase().trim();
const pessoa = pessoas.find(p =>
    p.nome.toLowerCase().trim() === termo
);


export function calcularPassagem(pessoa) {
    if (pessoa.opcaoVT) {
        var passagem = Math.round(0.06* pessoa.salario);
        return passagem;
    } else {
        return 0;
    }
}