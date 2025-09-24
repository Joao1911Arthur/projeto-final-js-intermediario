// arquivo: filtro.js

const pesquisa = document.getElementById("barraPesquisa");
const divResultados = document.getElementById("resultados");
const submit = document.getElementById("buscar-btn");


var funcionarios = [];

(function () {
    pegarFuncionarios();
})()


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



    if (termo === "") {
        submit.disabled = true;
        return;
    }

    const filtrados = funcionarios.filter(p =>
        p.funcionario.nome.toLowerCase().includes(termo)
    );


    submit.disabled = filtrados.length === 0;

    filtrados.forEach(pessoa => {
        const botao = document.createElement("input");
        botao.type = "button";
        botao.value = pessoa.funcionario.nome;
        botao.className = "btn btn-outline-secondary m-1";
        botao.addEventListener("click", () => {
            pesquisa.value = pessoa.funcionario.nome; // preenche o input com o nome clicado
        });
        divResultados.appendChild(botao);
    });
}
