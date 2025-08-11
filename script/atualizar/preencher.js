import { pessoas } from '../banco de dados/pessoas.js';

console.log(window.location.search)

var seach = window.location.search;
const id = seach.split('?')[1];
const pessoa = pessoas.find(p => p.id == id);
console.log(pessoa);


if (pessoa) {
    document.getElementById("iId").textContent = `id: ${pessoa.id}`;
    document.getElementById("nome").value = pessoa.nome;
    document.getElementById("sobrenome").value = pessoa.sobrenome;
    document.getElementById("email").value = pessoa.email;
    document.getElementById("telefone").value = pessoa.telefone;
    document.getElementById("dataNascimento").value = pessoa.dtNascimento;
    document.getElementById("endereco").value = pessoa.endereco;
    document.getElementById("escolaridade").value = pessoa.grauEscolaridade;
    document.getElementById("salario").value = pessoa.salarioAtual;
    document.getElementById("cargo").value = pessoa.cargoAtual;
    document.getElementById("sexo").value = pessoa.sexo;


    if (pessoa.optouVT) {
        console.log("optou por VT")
        document.getElementById("vt").checked = true;
        document.getElementById("valorPassagem").disabled = false;
        document.getElementById("valorPassagem").value = pessoa.valorPassagem;
    } else {
        console.log("não optou por VT")
        document.getElementById("vt").checked = false;
        document.getElementById("valorPassagem").value = 0;
    }


}