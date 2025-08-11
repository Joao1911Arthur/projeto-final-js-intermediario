import { filtro } from "./filtro.js";
import { pessoas } from "../banco de dados/pessoas.js";
import { exibirDados } from "./exibirDado.js";


const pesquisa = document.getElementById("barraPesquisa");
const submit = document.getElementById("buscar-btn");
const container = document.getElementById("iAtualizar");

console.log(pessoas)

pesquisa.addEventListener("keyup", filtro);

submit.addEventListener("click", () => {

    const termo = pesquisa.value.trim().toLowerCase();
    const pessoa = pessoas.find(p =>
        p.nome.toLowerCase().trim() === termo
    );

    if (pessoa) {
        exibirDados(pessoa);
    } else {
        alert("Pessoa não encontrada.");
    }
    console.log(pessoa);
});


container.addEventListener('click', (event) => {
    const termo = pesquisa.value.trim().toLowerCase();
    const pessoa = pessoas.find(p =>
        p.nome.toLowerCase().trim() === termo
    );
    var id = document.getElementById("iId").textContent;
    console.log(pessoa.id);
    
    window.location.href = `html/atualizarFuncionario.html?${pessoa.id}`
});