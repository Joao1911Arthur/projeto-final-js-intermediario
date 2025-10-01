import { calcularPassagem } from "./calculcarPassagem.js";
import { calcularDesconto } from "./calcularDesconto.js";
import { calcularFGTS } from "./calcularFGTS.js";

export function exibirDados(pessoa) {
  const anoAtual = new Date().getFullYear();
  const anoNascimento = new Date(pessoa.dataNascimento).getFullYear();
  pessoa.idade = anoAtual - anoNascimento;

  document.getElementById("iId").textContent = `id: ${pessoa._id}`;
  document.getElementById("inome").textContent =
    pessoa.nome + " " + pessoa.sobrenome;
  document.getElementById(
    "inasc"
  ).textContent = `Data de nascimento: ${pessoa.dtNascimento}`;
  document.getElementById(
    "iesco"
  ).textContent = `Escolaridade: ${pessoa.grauEscolaridade}`;
  document.getElementById(
    "iender"
  ).textContent = `Endereço: ${pessoa.endereco}`;
  document.getElementById("iidade").textContent = `Idade: ${pessoa.idade}`;
  document.getElementById(
    "isalario"
  ).textContent = `Salário: R$${pessoa.salarioAtual}`;
  document.getElementById(
    "iValorEmpresaFGTS"
  ).textContent = `FGTS: R$${calcularFGTS(pessoa)}`;
  document.getElementById("iVT").textContent = `Vale transporte: ${
    pessoa.optouVT >= true ? "Optante" : "Não optou"
  }`;
  document.getElementById("isexo").textContent = `Sexo: ${pessoa.sexo}`;
  document.getElementById(
    "icargo"
  ).textContent = `Cargo: ${pessoa.historicoCargosESalarios[0].cargo}`;

  if (pessoa.optouVT) {
    document.getElementById(
      "ipassagem"
    ).textContent = `Passagem: R$${calcularPassagem(pessoa)}`;
    document.getElementById(
      "iValorEmpresaVT"
    ).textContent = `Valor a pagar pela empresa (VT): R$${calcularDesconto(
      pessoa
    )}`;
  } else {
    document.getElementById("ipassagem").textContent = "";
    document.getElementById("iValorEmpresaVT").textContent = "";
  }

  document.getElementById("iresult").classList.remove("d-none");
}
