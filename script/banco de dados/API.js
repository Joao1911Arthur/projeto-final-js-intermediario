
var funcionarios = [];


function pegarFuncionarios() {
    fetch('https://node-vercel-app-rho.vercel.app/api/funcionarios', {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => {
            preencherTabela(dados)
        })
        .catch(err => console.error("Erro na requisição:", err));

}

function preencherTabela(dados) {
    funcionarios = dados;

    
    
}

