import { local } from '../banco de dados/localStorage.js';


var seach = window.location.search;
export const id = seach.split('?')[1];
const pessoa = local.find(p => p.id == id);
const radiosVT = document.querySelectorAll('input[name="vt"]');


if (pessoa) {
    document.getElementById("iId").textContent = `id: ${pessoa.id}`;
    document.getElementById("nome").value = pessoa.nome;
    document.getElementById("sobrenome").value = pessoa.sobrenome;
    document.getElementById("email").value = pessoa.email;
    document.getElementById("telefone").value = pessoa.telefone;
    document.getElementById("dataNascimento").value = pessoa.dataNascimento;
    document.getElementById("endereco").value = pessoa.endereco;
    document.getElementById("escolaridade").value = pessoa.grauEscolaridade;
    document.getElementById("salario").value = pessoa.salarioAtual;
    document.getElementById("cargo").value = pessoa.cargoAtual;
    document.getElementById("sexo").value = pessoa.sexo;
    document.getElementById("foto").src = "../script/" + pessoa.foto;

}

radiosVT.forEach((radio) => {
  radio.addEventListener("change", () => {
    const valorPassagem = document.getElementById("valorPassagem");

    if (radio.value === "sim") {
      valorPassagem.disabled = false;
    } else {
      valorPassagem.disabled = true;
      valorPassagem.value = "0";
    }
  });
});