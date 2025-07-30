import { exibirDados } from "./exibirDados.js";
import { pegarDados } from "./pegarDados.js";
import { pessoas } from "../banco de dados/pessoas.js";

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {

  exibirDados();
  pessoas.push(pegarDados());
  
  console.log(pessoas);

});

const radiosVT = document.querySelectorAll('input[name="vt"]');

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
