import { pessoas, local } from "../banco de dados/pessoas.js";

var pesquisa = document.getElementById("barraPesquisa");
const seach = window.location.search;
const id = seach.split('?')[1];
var neh = local.find(p => p.id == id);


if(pesquisa != null){
    var termo = pesquisa.value.toLowerCase().trim();

}

const pessoa = local.find(p =>
    p.nome.toLowerCase().trim() === termo
);


export function calcularPassagem(pessoa) {

    if (termo != "") {

        if (neh.optouVT) {
            var passagem = Math.round(0.06 * pessoa.salarioAtual);
            return passagem;
        } else {
            return 0;
        }

    } else {
        if (pessoa.optouVT) {
            var passagem = Math.round(0.06 * pessoa.salarioAtual);
            return passagem;
        } else {
            return 0;
        }
    }

}