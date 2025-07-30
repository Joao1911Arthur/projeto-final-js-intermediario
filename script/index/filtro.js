// arquivo: filtro.js

import { pessoas } from "../banco de dados/pessoas.js";

const pesquisa = document.getElementById("barraPesquisa");
const divResultados = document.getElementById("resultados");
const submit = document.getElementById("buscar-btn");

export function filtro() {
    const termo = pesquisa.value.toLowerCase().trim();
    divResultados.innerHTML = ""; // limpa resultados anteriores

    if (termo === "") {
        submit.disabled = true;
        return;
    }

    const filtrados = pessoas.filter(p =>
        p.nome.toLowerCase().includes(termo)
    );

    submit.disabled = filtrados.length === 0;

    filtrados.forEach(pessoa => {
        const botao = document.createElement("input");
        botao.type = "button";
        botao.value = pessoa.nome;
        botao.className = "btn btn-outline-secondary m-1";
        botao.addEventListener("click", () => {
            pesquisa.value = pessoa.nome; // preenche o input com o nome clicado
        });
        divResultados.appendChild(botao);
    });
}
