document.getElementById("submit").addEventListener("click", () => {
  const id = document.getElementById("iId").textContent.split(": ")[1];
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const data = document.getElementById("dataNascimento").value;
  const ende = document.getElementById("endereco").value;
  const esco = document.getElementById("escolaridade").value;
  // mudança para valor ser numero da passagem e salario
  const salario = parseInt(document.getElementById("salario").value);
  const cargo = document.getElementById("cargo").value;
  const sexo = document.getElementById("sexo").value;
  // mudança para valor ser numero da passagem e salario
  const valorPassagem = parseInt(
    document.getElementById("valorPassagem").value
  );
  var vt =
    document.querySelector('input[name="vt"]:checked').value == "sim"
      ? true
      : false;

  fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: `${nome}`,
      sobrenome: `${sobrenome}`,
      sexo: `${sexo}`,
      dtNascimento: `${data}`,
      grauEscolaridade: `${esco}`,
      endereco: `${ende}`,
      foto: `foto.png `,
      // mudança para valor ser numero da passagem e salario
      salarioAtual: salario,
      valorPassagem: valorPassagem,
      // mudança para valor ser booleano
      optouVT: vt,
      historicoCargosESalarios: [
        {
          cargo: `${cargo}`,
          salario: "3000",
          dataInicio: "2024-01-01",
          dataFim: "2025-01-01",
        },
      ],
    }),
  })
    .then((resp) => resp.json())
    .then((dados) => console.log(dados))
    .catch((err) => console.error("Erro na requisição:", err));

  window.scrollTo(0, 0);

  alert("Dados atualizados com sucesso!");
});
