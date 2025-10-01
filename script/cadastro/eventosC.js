import { exibirDados } from "./exibirDados.js";
import { pegarDados } from "./pegarDados.js";

const submit = document.getElementById("submit");
const radiosVT = document.querySelectorAll('input[name="vt"]');

// Inicializa o Local Storage se estiver vazio

submit.addEventListener("click", () => {
  exibirDados();

  const neh = pegarDados();

  console.log(neh);

  fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "funcionario": {
        "nome": `${neh.nome}`,
        "sobrenome": `${neh.sobrenome}`,
        "sexo": `${neh.sexo}`,
        "dtNascimento": `${neh.dataNascimento}`,
        "grauEscolaridade": `${neh.grauEscolaridade}`,
        "endereco": `${neh.endereco}`,
        "foto": "foto.png",
        "salarioAtual": `${neh.salarioAtual}`,
        "valorPassagem": `${neh.vt ? neh.valorPassagem : 0}`,
        "optouVT": `${neh.vt}`,
        "historicoCargosESalarios": [
          {
            "cargo": `${neh.cargoAtual}`,
            "salario": "3000",
            "dataInicio": "2024-01-01",
            "dataFim": "2025-01-01"
          }
        ]
      }
    }
    )
  })
    .then(resp => resp.json())
    .then(dados => console.log(dados))
    .catch(err => console.error("Erro na requisição:", err));


});

// Lógica dos radios
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
