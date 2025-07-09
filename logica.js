import { pessoas } from "./pessoas.js"

const pesquisa = document.getElementById("barraPesquisa");
const submit = document.getElementById("buscar-btn");

document.getElementById("barraPesquisa").onkeyup = function(x){

    var neh = pessoas.filter(teste => teste.nome.trim().toLowerCase().includes(pesquisa.value.toLowerCase()));
    console.log(neh);

}

submit.addEventListener('click', () => {

    const x = pesquisa.value.trim().toLowerCase();
    const y = pessoas.map(pessoa => pessoa.nome.toLowerCase().trim());


    const hoje = new Date().getFullYear();

    pessoas.forEach(fpf => {    // transforma em Data
        const data = new Date(fpf.dataNascimento).getFullYear();
        pessoas.idade;
        fpf.idade = hoje - data;
    });

    if (pessoas.filter(escravo => escravo.nome.toLowerCase().trim() == x)) {

        let pegarIndex = pessoas.findIndex(pessoa => pessoa.nome.toLowerCase().trim() == x);
        let pegarPessoa = pessoas[pegarIndex].nome;
        let pegarIdade = pessoas[pegarIndex].idade;

        document.getElementById("ititulo").innerHTML = pegarPessoa;
        document.getElementById("ifundacao").innerHTML = `${pegarPessoa} foi fundado em ${pessoas[pegarIndex].dataNascimento} e possuí ${pegarIdade} anos`;
        document.getElementById("irank").innerHTML = `${pegarPessoa} foi o ${pegarIndex + 1}º estado brasileiro a ser fundado`;

    } else {
        document.getElementById("ititulo").innerHTML = `este estado não está na lista`;
    }
});


barraPesquisa.addEventListener("change", () => {     // desabilita o submit

    document.getElementById("buscar-btn").disabled = false;

})
