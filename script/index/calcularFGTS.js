

export function calcularFGTS(pessoa) {
    var FGTS = pessoa.salarioAtual * 0.08;
    return Math.round(FGTS);
}