
import { pessoas } from "./pessoas.js";

export function exibirDados(pessoa) {
    const anoAtual = new Date().getFullYear();
    const anoNascimento = new Date(pessoa.dataNascimento).getFullYear();
    pessoa.idade = anoAtual - anoNascimento;

    document.getElementById("inome").textContent = pessoa.nome;
    document.getElementById("inasc").textContent = `Data de nascimento: ${pessoa.dataNascimento}`;
    document.getElementById("iesco").textContent = `Escolaridade: ${pessoa.grauEscolaridade}`;
    document.getElementById("iender").textContent = `Endereço: ${pessoa.endereco}`;
    document.getElementById("iidade").textContent = `Idade: ${pessoa.idade}`;
    document.getElementById("isalario").textContent = `Salário: R$${pessoa.salario}`;
    document.getElementById("iVT").textContent = `Vale transporte: ${pessoa.opcaoVT >= true ? "Possuí" : "Não possuí"}`;
    document.getElementById("ipassagem").textContent = `Passagem: R$${Math.round((6 / 100) * pessoa.salario)}`;


    document.getElementById("iresult").classList.remove("d-none");
}