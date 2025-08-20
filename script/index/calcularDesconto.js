import { calcularPassagem } from "./calculcarPassagem.js";
import { pessoas } from "../banco de dados/pessoas.js";

var pesquisa = document.getElementById("barraPesquisa");
var termo = pesquisa.value.toLowerCase().trim();
const pessoa = pessoas.find(p =>
    p.nome.toLowerCase().trim() === termo
);

export function calcularDesconto(pessoa) {
    var passagem = calcularPassagem(pessoa);

    if (200 > passagem) {
        var calculo = 200 - passagem;
        return calculo;
        console.log(calculo);
    }else{
        return 0;
    }
}