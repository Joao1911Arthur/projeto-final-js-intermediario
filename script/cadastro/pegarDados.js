import { pessoas, local } from "../banco de dados/pessoas.js";

export function pegarDados() {

    var id;
    if (local == null) {
        id = pessoas.length + 1;
    } else {
        id = local.length + 1;
    }

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const sexo = document.getElementById('sexo').value;
    const salarioAtual = document.getElementById("salario").value;
    const vt = document.querySelector('input[name="vt"]:checked');
    const valorPassagem = document.getElementById("valorPassagem").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cargoAtual = document.getElementById("cargo").value;
    const grauEscolaridade = document.getElementById("escolaridade").value;
    const historico = document.getElementById("ihistorico").value;
    const endereco = document.getElementById("endereco").value;
    const foto = document.getElementById("ifoto").value


    if (vt === "sim") {
        document.getElementById("valorPassagem").disabled = false;
    }

    if (!nome || !dataNascimento || !salarioAtual || !sobrenome) {
        alert("Preencha todos os campos obrigatórios.");
        return null;
    } else {
        return {
            id,
            nome,
            sobrenome,
            dataNascimento,
            sexo,
            salarioAtual,
            vt: vt ? vt.value : "não",
            valorPassagem: vt ? valorPassagem : "N/A",
            email,
            telefone,
            cargoAtual,
            grauEscolaridade,
            historico,
            endereco,
            foto
        };
    }

}