

export function calcularPassagem(pessoa) {

    if (pessoa.optouVT) {
        var passagem = Math.round(0.06 * pessoa.salario);
        return passagem;
    } else {
        return 0;
    }
}