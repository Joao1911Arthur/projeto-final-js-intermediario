import { local } from "../banco de dados/localStorage.js";
import { pessoas } from "../banco de dados/pessoas.js";

export function pegarDados() {

    var id;
    if(local == null){
        id = pessoas.length + 1;
    }else{
        id = local.length + 1;
    }

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const idade = document.getElementById("dataNascimento").value;
    const sexo = document.getElementById('sexo').value;
    const salario = document.getElementById("salario").value;
    const vt = document.querySelector('input[name="vt"]:checked');
    const valorPassagem = document.getElementById("valorPassagem").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cargo = document.getElementById("cargo").value;
    const escolaridade = document.getElementById("escolaridade").value;
    const historico = document.getElementById("ihistorico").value;
    const endereco = document.getElementById("endereco").value;

    if (vt === "sim") {
        document.getElementById("valorPassagem").disabled = false;
    }

    if (!nome || !idade || !salario || !sobrenome) {
        alert("Preencha todos os campos obrigatórios.");
        return null;
    } else {
        return {
            id,
            nome,
            sobrenome,
            idade,
            sexo,
            salario,
            vt: vt ? vt.value : "não",
            valorPassagem: vt ? valorPassagem : "N/A",
            email,
            telefone,
            cargo,
            escolaridade,
            historico,
            endereco
        };
    }

    console.log("Dados capturados:", {
        id,
        nome,
        sobrenome,
        idade,
        sexo,
        salario,
        vt: vt ? vt.value : "não",
        valorPassagem: vt ? valorPassagem : "N/A",
        email,
        telefone,
        cargo,
        escolaridade,
        historico,
        endereco
    });

}