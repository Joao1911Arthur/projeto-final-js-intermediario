import{local} from "../banco de dados/localStorage.js"

    const delet = document.getElementById("delete");

function deletarFuncionario(id){

    const novoLocal = local.filter((funcionario) => funcionario.id !== id);
    localStorage.setItem("pessoas", JSON.stringify(novoLocal));
    alert("Funcionário deletado com sucesso!");
    window.location.href = "../index.html";

}

delet.addEventListener("click", () =>{
    const id = document.getElementById("iId").textContent.split(": ")[1];
    if(confirm("Tem certeza que deseja deletar este funcionário?")) {
        deletarFuncionario(parseInt(id));
    }
})