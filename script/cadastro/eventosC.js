import { exibirDados } from "./exibirDados.js";
import { pegarDados } from "./pegarDados.js";
import { pessoas, local } from "../banco de dados/pessoas.js";

const submit = document.getElementById("submit");
const radiosVT = document.querySelectorAll('input[name="vt"]');

(function () {
  if (local == null) {
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
  }
})();

submit.addEventListener("click", () => {

  exibirDados();

  if (local == null) {
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    local.push(pegarDados());
  } else {
    local.push(pegarDados());
    localStorage.setItem("pessoas", JSON.stringify(local));
  }

  console.log(pessoas);

});


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
