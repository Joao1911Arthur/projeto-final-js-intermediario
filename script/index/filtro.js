// arquivo: filtro.js

import { exibirDados } from "./exibirDado.js";

const pesquisa = document.getElementById("barraPesquisa");
const divResultados = document.getElementById("resultados");
var funcionarios = [];

pesquisa.addEventListener("keyup", pegarFuncionarios)


function pegarFuncionarios() {
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            filtro(dados)
        })
        .catch(err => console.error("Erro na requisição:", err));

}

export function filtro(dados) {
    const termo = pesquisa.value.toLowerCase().trim();
    divResultados.innerHTML = ""; // limpa resultados anteriores

    funcionarios = dados;

    const filtrados = funcionarios.filter(p =>
        p.nome.toLowerCase().includes(termo)
    );


    filtrados.forEach(pessoa => {
        const botao = document.createElement("input");
        botao.type = "button";
        botao.value = pessoa.nome;
        botao.className = "btn btn-outline-secondary m-1";
        botao.addEventListener("click", () => {
            pesquisa.value = pessoa.nome; // preenche o input com o nome clicado

            console.log(funcionarios);

            let termo = pesquisa.value.trim().toLowerCase();
            let pdp = funcionarios.find(p =>
                p.nome.toLowerCase().trim() === termo
            );

            if (pdp) {
                exibirDados(pdp);
            } else {
                alert("Pessoa não encontrada.");
            }

        });
        divResultados.appendChild(botao);
    });
}
