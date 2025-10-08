

export function calcularFGTS(pessoa) {
    var FGTS = pessoa.salario * 0.08;
    return Math.round(FGTS);
}