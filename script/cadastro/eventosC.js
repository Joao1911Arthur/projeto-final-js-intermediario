import { exibirDados } from "./exibirDados.js";
import { pegarDados } from "./pegarDados.js";
import { pessoas } from "../banco de dados/pessoas.js";

const submit = document.getElementById("submit");
const radiosVT = document.querySelectorAll('input[name="vt"]');

// Inicializa o Local Storage se estiver vazio
(function () {
  if (!localStorage.getItem("pessoas")) {
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
  }
})();

submit.addEventListener("click", () => {
  exibirDados();

  // 🔹 Sempre pega os dados direto do localStorage
  let local = JSON.parse(localStorage.getItem("pessoas")) || [];

  // adiciona os novos dados
  local.push(pegarDados());

  // salva de novo no localStorage
  localStorage.setItem("pessoas", JSON.stringify(local));

  console.log(local);
});

// Lógica dos radios
radiosVT.forEach((radio) => {
  radio.addEventListener("change", () => {
    const valorPassagem = document.getElementById("valorPassagem");

    if (radio.value === "sim") {
      valorPassagem.disabled = false;
    } else {
      valorPassagem.disabled = true;
      valorPassagem.value = "";
    }
  });
});
