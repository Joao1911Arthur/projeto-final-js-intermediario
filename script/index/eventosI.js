import { filtro } from "./filtro.js";
import { exibirDados } from "./exibirDado.js";

const pesquisa = document.getElementById("barraPesquisa");
const submit = document.getElementById("buscar-btn");
const container = document.getElementById("iAtualizar");


addEventListener("DOMContentLoaded", pegarFuncionarios);

function pegarFuncionarios() {
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {

            var funcionarios = dados;

            console.log(funcionarios);


            // Evento de digitação no campo de pesquisa
            pesquisa.addEventListener("keyup", () => {
                // 🔹 carrega os dados sempre atualizados

                filtro(funcionarios);

                if (pesquisa.value.trim() === "") {
                    submit.disabled = true;
                } else {
                    submit.disabled = false;
                }
            });

            // Evento de clique no botão de busca
            submit.addEventListener("click", () => {

                console.log(funcionarios);

                let termo = pesquisa.value.trim().toLowerCase();
                let pdp = funcionarios.find(p =>
                    p.funcionario.nome.toLowerCase().trim() === termo
                );

                if (pdp) {
                    exibirDados(pdp);
                } else {
                    alert("Pessoa não encontrada.");
                }
            });

        })
        .catch(err => console.error("Erro na requisição:", err));

}


// Evento de clique no botão de atualizar
container.addEventListener('click', (event) => {

    let termo = pesquisa.value.trim().toLowerCase();
    let pessoa = funcionarios.find(p =>
        p.nome.toLowerCase().trim() === termo
    );

    if (pessoa) {
        window.location.href = `html/atualizarFuncionario.html?${pessoa.id}`;
    } else {
        alert("Nenhuma pessoa selecionada para atualizar.");
    }
});

