import { pessoas } from "../banco de dados/pessoas.js";

var pesquisa = document.getElementById("barraPesquisa");
var termo = pesquisa.value.toLowerCase().trim();
const pessoa = pessoas.find(p =>
    p.nome.toLowerCase().trim() === termo
);

export function calcularFGTS(pessoa) {
    var FGTS = pessoa.salario * 0.08; 
    return Math.round(FGTS);
}