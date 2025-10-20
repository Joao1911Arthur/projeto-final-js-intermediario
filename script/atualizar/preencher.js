document.addEventListener("DOMContentLoaded", () => {
  carregarDetalhesFuncionario();
});

let funcionario = {};

function carregarDetalhesFuncionario() {
  // 🔹 Pega o ID da URL (exemplo: ?68bf6f713deb51d9da845a88 → "68bf6f713deb51d9da845a88")
  const idTeste = window.location.search.substring(1);

  if (!idTeste) {
    console.error("Nenhum ID encontrado na URL.");
    return;
  }

  // 🔹 Faz a requisição para a API
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

      // 🔹 Preenche os campos do formulário com segurança
      document.getElementById("iId").textContent = `id: ${idTeste}`;
      document.getElementById("nome").value = funcionario.nome ?? "";
      document.getElementById("sobrenome").value = funcionario.sobrenome ?? "";
      document.getElementById("dataNascimento").value =
        funcionario.dtNascimento ?? "";
      document.getElementById("endereco").value = funcionario.endereco ?? "";
      document.getElementById("escolaridade").value =
        funcionario.grauEscolaridade ?? "";
      document.getElementById("salario").value = funcionario.salario ?? "";
      document.getElementById("sexo").value = funcionario.sexo ?? "";

      // 🔹 Pega o cargo (caso exista)
      document.getElementById("cargo").value = funcionario.cargo ?? "";

      // 🖼️ Mostra a foto (usa uma padrão se não tiver)
      const fotoInput = document.getElementById("img");
      const imgPreview = document.getElementById("foto");
      const fotoURL = funcionario.foto
        ? funcionario.foto
        : "../imagens/sem-foto.png";

      fotoInput.value = fotoURL; // se quiser manter a URL no input hidden
      imgPreview.src = fotoURL;
      imgPreview.alt = "Foto do funcionário";

      // 🎫 Controle do Vale Transporte
      const valorPassagem = document.getElementById("valorPassagem");
      valorPassagem.value = funcionario.valorPassagem ?? 0;
      valorPassagem.disabled = !funcionario.optouVT;

      // 📅 Preenche a data de início, se existir
      const inicio = document.getElementById("inicio");
      inicio.value = funcionario.dataInicio ?? "";

      // 🔘 Marca o radio correspondente (sim/não)
      document.querySelector(
        `input[name="vt"][value="${funcionario.optouVT ? true : false}"]`
      ).checked = true;

      const radiosVT = document.querySelectorAll('input[name="vt"]');

      // 🔄 Atualiza valorPassagem conforme o radio muda
      radiosVT.forEach((radio) => {
        radio.addEventListener("change", () => {
          const valorPassagem = document.getElementById("valorPassagem");

          if (radio.value) {
            valorPassagem.disabled = false;
            valorPassagem.value = funcionario.valorPassagem;
          } else {
            valorPassagem.disabled = true;
            valorPassagem.value = 0;
          }
        });
      });
    })
    .catch((err) => console.error("Erro na requisição:", err));
}
