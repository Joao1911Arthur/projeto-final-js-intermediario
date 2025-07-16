import { filtro } from "./filtro.js";
import { exibirDados } from "./exibirDado.js";
import { pessoas } from "./pessoas.js";

const pesquisa = document.getElementById("barraPesquisa");
const submit = document.getElementById("buscar-btn");

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
});
    