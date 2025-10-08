import { calcularPassagem } from "./calculcarPassagem.js";

export function calcularDesconto(pessoa) {
    var passagem = calcularPassagem(pessoa);

    if (200 > passagem) {
        var calculo = 200 - passagem;
        return calculo;
    }else{
        return 0;
    }
}