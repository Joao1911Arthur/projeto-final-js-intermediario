
function deletarFuncionario() {
    let id = window.location.search.split("?")[1];

    fetch(`https://node-vercel-app-rho.vercel.app/api/funcionarios/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
        .then(resp => resp.json())
        .then(dados => console.log(dados))
        .catch(err => console.error("Erro na requisição:", err));

    alert("Funcionário deletado com sucesso!");
    window.location.href = "../index.html";
} 