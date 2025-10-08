document.addEventListener("DOMContentLoaded", () => {
  carregarDetalhesFuncionario();
});

let funcionario = {};

function carregarDetalhesFuncionario() {
  // Pega o ID da URL — ex: ?68bf6f713deb51d9da845a88 → "68bf6f713deb51d9da845a88"
  const idTeste = window.location.search.substring(1);

  if (!idTeste) {
    console.error("Nenhum ID encontrado na URL.");
    return;
  }

  fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${idTeste}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((resp) => {
      if (!resp.ok) throw new Error("Erro ao buscar funcionário.");
      return resp.json();
    })
    .then((dados) => {
      funcionario = dados;
      console.log("Funcionário carregado:", funcionario);

      if (!funcionario || Object.keys(funcionario).length === 0) {
        alert("Funcionário não encontrado.");
        return;
      }

      // Preenche os campos do formulário com segurança
      document.getElementById("iId").textContent = `id: ${idTeste}`;
      document.getElementById("nome").value = funcionario.nome ?? "";
      document.getElementById("sobrenome").value = funcionario.sobrenome ?? "";
      document.getElementById("dataNascimento").value =
        funcionario.dtNascimento ?? "";
      document.getElementById("endereco").value = funcionario.endereco ?? "";
      document.getElementById("escolaridade").value =
        funcionario.grauEscolaridade ?? "";
      document.getElementById("salario").value = funcionario.salarioAtual ?? "";
      document.getElementById("sexo").value = funcionario.sexo ?? "";

      // 🧠 Protege caso o histórico venha vazio
      const cargoAtual =
        funcionario.historicoCargosESalarios &&
        funcionario.historicoCargosESalarios.length > 0
          ? funcionario.historicoCargosESalarios.at(-1).cargo // pega o último cargo
          : "";
      document.getElementById("cargo").value = cargoAtual;

      // 🖼️ Mostra a foto (usa uma padrão se não tiver)
      const fotoEl = document.getElementById("foto");
      fotoEl.src = funcionario.foto
        ? funcionario.foto
        : "../imagens/sem-foto.png";

      // 🎫 Controle do Vale Transporte
      const valorPassagem = document.getElementById("valorPassagem");
      valorPassagem.value = funcionario.valorPassagem ?? 0;
      valorPassagem.disabled = !funcionario.optouVT;

      // Marca o radio correspondente
      document.querySelector(
        `input[name="vt"][value="${funcionario.optouVT ? "sim" : "nao"}"]`
      ).checked = true;

      // Atualiza valorPassagem conforme o radio muda
      document.querySelectorAll('input[name="vt"]').forEach((radio) => {
        radio.addEventListener("change", () => {
          if (radio.value === "sim") {
            valorPassagem.disabled = false;
            valorPassagem.value = funcionario.valorPassagem ?? 0;
          } else {
            valorPassagem.disabled = true;
            valorPassagem.value = 0;
          }
        });
      });
    })
    .catch((err) => console.error("Erro na requisição:", err));
}
