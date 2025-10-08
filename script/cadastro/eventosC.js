import { pegarDados } from "./pegarDados.js";

const submit = document.getElementById("submit");
const radiosVT = document.querySelectorAll('input[name="vt"]');

// Inicializa o Local Storage se estiver vazio

submit.addEventListener("click", () => {

  const neh = pegarDados();

  if (!neh.nome || !neh.sobrenome || !neh.dataNascimento || !neh.salarioAtual || !neh.cargoAtual || !neh.grauEscolaridade || !neh.endereco || !neh.sexo) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  } else {

    if (neh.idade > 18) {
      fetch("https://node-vercel-app-rho.vercel.app/api/funcionarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "nome": `${neh.nome}`,
          "sobrenome": `${neh.sobrenome}`,
          "sexo": `${neh.sexo}`,
          "dtNascimento": `${neh.dataNascimento}`,
          "grauEscolaridade": `${neh.grauEscolaridade}`,
          "endereco": `${neh.endereco}`,
          "foto": `${neh.foto}`,
          "valorPassagem": parseInt(neh.valorPassagem),
          "optouVT": neh.vt,
          "cargo": `${neh.cargoAtual}`,
          "salario": parseInt(neh.salarioAtual),
          "dataInicio": `${neh.inicio}`,
          "dataDemissao": null
        }
        )
      })
        .then(resp => resp.json())
        .then(dados => {
          console.log(dados)
          alert("Funcionário cadastrado com sucesso!");
          window.location.href = "../index.html";
        })
        .catch(err => console.error("Erro na requisição:", err));
    } else {
      alert("Funcionário menor de idade não pode ser cadastrado.");
      return false;
    }

  }
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
