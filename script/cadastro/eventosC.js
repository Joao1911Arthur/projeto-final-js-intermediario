import { exibirDados } from "./exibirDados.js";
import { pegarDados } from "./pegarDados.js";

const submit = document.getElementById("submit");
const radiosVT = document.querySelectorAll('input[name="vt"]');

// Inicializa o Local Storage se estiver vazio

submit.addEventListener("click", () => {
  exibirDados();

  const neh = pegarDados();

  console.log(neh);

  fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "nome": `${nome}`,
      "sobrenome": `${sobrenome}`,
      "sexo": `${sexo}`,
      "dtNascimento": `${data}`,
      "grauEscolaridade": `${esco}`,
      "endereco": `${ende}`,
      "foto": `foto.png `,
      "salarioAtual": parseInt(salario),
      "valorPassagem": parseInt(valorPassagem),
      "optouVT": vt,
      "historicoCargosESalarios": [
        {
          "cargo": `${cargo}`,
          "salario": "3000",
          "dataInicio": "2024-01-01",
          "dataFim": "2025-01-01"
        }
      ]
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
