import { local } from "../banco de dados/localStorage.js";


document.getElementById("submit").addEventListener("click", () => {

    const id = document.getElementById("iId").textContent.split(": ")[1];
    const nome1 = document.getElementById("nome").value;
    const sobrenome1 = document.getElementById("sobrenome").value;
    const email1 = document.getElementById("email").value;
    const tel1 = document.getElementById("telefone").value;
    const data1 = document.getElementById("dataNascimento").value;
    const ende1 = document.getElementById("endereco").value;
    const esco1 = document.getElementById("escolaridade").value;
    const salario1 = document.getElementById("salario").value;
    const cargo1 = document.getElementById("cargo").value;
    const sexo1 = document.getElementById("sexo").value;
    const valorPassagem1 = document.getElementById("valorPassagem").value;
    const vt1 = document.getElementById("vt").checked;


    const pessoaAtualizada = {
        id: parseInt(id),
        nome: nome1,
        sobrenome: sobrenome1,
        email: email1,
        telefone: tel1,
        dataNascimento: data1,
        endereco: ende1,
        grauEscolaridade: esco1,
        salarioAtual: salario1,
        cargoAtual: cargo1,
        sexo: sexo1,
        optouVT: vt1,
        valorPassagem: vt ? valorPassagem : 0
    };

    localStorage.setItem("pessoas", JSON.stringify(local.map(p => p.id == id ? pessoaAtualizada : p)));

})