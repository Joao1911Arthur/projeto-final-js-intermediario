import { local } from "../banco de dados/localStorage.js";
import { pessoas } from "../banco de dados/pessoas.js";


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
    var vt1 = document.querySelector('input[name="vt"]:checked').value == "sim" ? true : false;
    const foto1 = pessoas.find(p => p.id == id).foto;
    console.log(vt1);
    
   
    

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
        valorPassagem: vt1 ? valorPassagem1 : 0,
        foto: foto1
    };

    localStorage.setItem("pessoas", JSON.stringify(local.map(p => p.id == id ? pessoaAtualizada : p)));

    window.scrollTo(0, 0);

    alert("Dados atualizados com sucesso!");

})