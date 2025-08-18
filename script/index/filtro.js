// arquivo: filtro.js

const pesquisa = document.getElementById("barraPesquisa");
const divResultados = document.getElementById("resultados");
const submit = document.getElementById("buscar-btn");

export function filtro(neh) {
    const termo = pesquisa.value.toLowerCase().trim();
    divResultados.innerHTML = ""; // limpa resultados anteriores


    if (termo === "") {
        submit.disabled = true;
        return;
    }

    const filtrados = neh.filter(p =>
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
