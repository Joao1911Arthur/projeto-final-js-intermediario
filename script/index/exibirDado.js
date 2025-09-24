
import { calcularPassagem } from "./calculcarPassagem.js";
import { calcularDesconto } from "./calcularDesconto.js";
import { calcularFGTS } from "./calcularFGTS.js";

export function exibirDados(pessoa) {


    const anoAtual = new Date().getFullYear();
    const anoNascimento = new Date(pessoa.dataNascimento).getFullYear();
    pessoa.idade = anoAtual - anoNascimento;

    document.getElementById("iId").textContent = `id: ${pessoa._id}`;
    document.getElementById("inome").textContent = pessoa.funcionario.nome + " " + pessoa.funcionario.sobrenome;
    document.getElementById("inasc").textContent = `Data de nascimento: ${pessoa.funcionario.dtNascimento}`;
    document.getElementById("iesco").textContent = `Escolaridade: ${pessoa.funcionario.grauEscolaridade}`;
    document.getElementById("iender").textContent = `Endereço: ${pessoa.funcionario.endereco}`;
    document.getElementById("iidade").textContent = `Idade: ${pessoa.funcionario.idade}`;
    document.getElementById("isalario").textContent = `Salário: R$${pessoa.funcionario.salarioAtual}`;
    document.getElementById("iValorEmpresaFGTS").textContent = `FGTS: R$${calcularFGTS(pessoa.funcionario)}`;
    document.getElementById("iVT").textContent = `Vale transporte: ${pessoa.funcionario.optouVT >= true ? "Optante" : "Não optou"}`;
    document.getElementById("isexo").textContent = `Sexo: ${pessoa.funcionario.sexo}`;
    document.getElementById("icargo").textContent = `Cargo: ${pessoa.funcionario.cargoAtual}`;


    if (pessoa.optouVT) {
        document.getElementById("ipassagem").textContent = `Passagem: R$${calcularPassagem(pessoa)}`;
        document.getElementById("iValorEmpresaVT").textContent = `Valor a pagar pela empresa (VT): R$${calcularDesconto(pessoa)}`;

    } else {
        document.getElementById("ipassagem").textContent = "";
        document.getElementById("iValorEmpresaVT").textContent = "";
    }

    

    console.log(pessoa)

    document.getElementById("iresult").classList.remove("d-none");
}