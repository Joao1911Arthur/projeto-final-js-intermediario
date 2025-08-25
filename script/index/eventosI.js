import { filtro } from "./filtro.js";
import { pessoas } from "../banco de dados/pessoas.js"; 
import { exibirDados } from "./exibirDado.js";

const pesquisa = document.getElementById("barraPesquisa");
const submit = document.getElementById("buscar-btn");
const container = document.getElementById("iAtualizar");

// Inicializa o localStorage se estiver vazio
(function () {
    if (!localStorage.getItem("pessoas")) {
        localStorage.setItem("pessoas", JSON.stringify(pessoas));
    }
})();

// Evento de digitação no campo de pesquisa
pesquisa.addEventListener("keyup", () => {
    // 🔹 carrega os dados sempre atualizados
    let local = JSON.parse(localStorage.getItem("pessoas")) || [];

    filtro(local);

    if (pesquisa.value.trim() === "") {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
});

// Evento de clique no botão de busca
submit.addEventListener("click", () => {
    let local = JSON.parse(localStorage.getItem("pessoas")) || [];

    console.log(local);

    let termo = pesquisa.value.trim().toLowerCase();
    let pdp = local.find(p =>
        p.nome.toLowerCase().trim() === termo
    );

    if (pdp) {
        exibirDados(pdp);
    } else {
        alert("Pessoa não encontrada.");
    }
});

// Evento de clique no botão de atualizar
container.addEventListener('click', (event) => {
    let local = JSON.parse(localStorage.getItem("pessoas")) || [];

    let termo = pesquisa.value.trim().toLowerCase();
    let pessoa = local.find(p =>
        p.nome.toLowerCase().trim() === termo
    );

    if (pessoa) {
        window.location.href = `html/atualizarFuncionario.html?${pessoa.id}`;
    } else {
        alert("Nenhuma pessoa selecionada para atualizar.");
    }
});
