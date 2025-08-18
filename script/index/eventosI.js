import { filtro } from "./filtro.js";
import { pessoas } from "../banco de dados/pessoas.js";
import { exibirDados } from "./exibirDado.js";
import { local } from "../banco de dados/localStorage.js"

const pesquisa = document.getElementById("barraPesquisa");
const submit = document.getElementById("buscar-btn");
const container = document.getElementById("iAtualizar");

(function () {
    if (local == null) {
        localStorage.setItem("pessoas", JSON.stringify(pessoas));
    }
})();

pesquisa.addEventListener("keyup", () => {

    if (local == null) {
        filtro(pessoas);
    } else {
        filtro(local);
    }

    if (pesquisa.value.trim() === "") {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
});

submit.addEventListener("click", () => {

    if (local == null) {
        let termo = pesquisa.value.trim().toLowerCase();
        let pessoa = pessoas.find(p =>
            p.nome.toLowerCase().trim() === termo
        );

        if (pessoa) {
            exibirDados(pessoa);
        } else {
            alert("Pessoa não encontrada.");
        }
    } else {
        let termo = pesquisa.value.trim().toLowerCase();
        let pdp = local.find(p =>
            p.nome.toLowerCase().trim() === termo
        );
        console.log(pdp);

        if (pdp) {
            exibirDados(pdp);
        } else {
            alert("Pessoa não encontrada.");
        }
        console.log(pdp, "!");
    }

});


container.addEventListener('click', (event) => {
    if (local == null) {
        let termo = pesquisa.value.trim().toLowerCase();
        let pessoa = pessoas.find(p =>
            p.nome.toLowerCase().trim() === termo
        );
        window.location.href = `html/atualizarFuncionario.html?${pessoa.id}`
    } else {
        let termo = pesquisa.value.trim().toLowerCase();
        let pessoa = local.find(p =>
            p.nome.toLowerCase().trim() === termo
        );
        window.location.href = `html/atualizarFuncionario.html?${pessoa.id}`
    }




    if (local == null) {
        localStorage.setItem("pessoas", JSON.stringify(pessoas));
    }
});

