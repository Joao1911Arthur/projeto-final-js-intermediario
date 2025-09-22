document.addEventListener("DOMContentLoaded", () => {
  carregarDetalhesFuncionario();
});

let funcionario = {};


function carregarDetalhesFuncionario() {
  var idTeste = window.location.search.substring(1);

  fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${idTeste}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then(resp => resp.json())
    .then(dados => {
      funcionario = dados.funcionario;

      console.log("Funcionário carregado:", funcionario);


      if (funcionario) {
        document.getElementById("iId").textContent = `id: ${idTeste}`;
        document.getElementById("nome").value = funcionario.nome || "";
        document.getElementById("sobrenome").value = funcionario.sobrenome || "";
        document.getElementById("dataNascimento").value = funcionario.dtNascimento || "";
        document.getElementById("endereco").value = funcionario.endereco || "";
        document.getElementById("escolaridade").value = funcionario.grauEscolaridade || "";
        document.getElementById("salario").value = funcionario.salarioAtual || "";
        document.getElementById("cargo").value = funcionario.cargoAtual || "";
        document.getElementById("sexo").value = funcionario.sexo || "";
        document.getElementById("foto").src = "";


        const valorPassagem = document.getElementById("valorPassagem");
        valorPassagem.value = funcionario.valorPassagem || "";
        valorPassagem.disabled = !funcionario.optouVT;

        if (funcionario.optouVT) {
          document.querySelector('input[name="vt"][value="sim"]').checked = true;
        } else {
          document.querySelector('input[name="vt"][value="nao"]').checked = true;
        }

        document.querySelectorAll('input[name="vt"]').forEach(radio => {
          radio.addEventListener("change", () => {
            if (radio.value === "sim") {
              valorPassagem.disabled = false;
            } else {
              valorPassagem.disabled = true;
              valorPassagem.value = "";
            }
          });
        });
      }
    })
    .catch(err => console.error("Erro na requisição:", err));
}
