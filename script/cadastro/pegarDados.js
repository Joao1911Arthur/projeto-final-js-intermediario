
export function pegarDados() {

  const nome = document.getElementById("nome").value.replace(/\d+/, "");
  const sobrenome = document.getElementById("sobrenome").value.replace(/\d+/, "");
  const dataNascimento = document.getElementById("dataNascimento").value;
  const sexo = document.getElementById("sexo").value;
  const salarioAtual = document.getElementById("salario").value;
  const vt = document.querySelector('input[name="vt"]:checked');
  const valorPassagem = document.getElementById("valorPassagem").value;
  const cargoAtual = document.getElementById("cargo").value;
  const grauEscolaridade = document.getElementById("escolaridade").value;
  const historico = document.getElementById("ihistorico").value;
  const endereco = document.getElementById("endereco").value;
  const foto = document.getElementById("ifoto");



  if (vt === "sim") {
    document.getElementById("valorPassagem").disabled = false;
  }


  else {
    return {
      nome,
      sobrenome,
      dataNascimento,
      sexo,
      salarioAtual,
      vt: vt ? vt.value : "não",
      valorPassagem: vt ? valorPassagem : "N/A",
      cargoAtual,
      grauEscolaridade,
      historico,
      endereco,
      foto,
    };

  }
}
