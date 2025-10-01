import { filtro } from "./filtro.js";

const pesquisa = document.getElementById("barraPesquisa");
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

                if (pesquisa.value != "") {
                    filtro(funcionarios);

                }

            });

            // Evento de clique no botão de atualizar
            container.addEventListener('click', (event) => {

                let termo = pesquisa.value.trim().toLowerCase();
                let pessoa = funcionarios.find(p =>
                    p.nome.toLowerCase().trim() === termo
                );

                console.log(pessoa);

                if (pessoa) {
                    window.location.href = `html/atualizarFuncionario.html?${pessoa._id}`;
                } else {
                    alert("Nenhuma pessoa selecionada para atualizar.");
                }
            });

        })
        .catch(err => console.error("Erro na requisição:", err));


}



