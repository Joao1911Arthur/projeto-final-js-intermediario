

export function pegarDados() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const idade = document.getElementById("dataNascimento").value;
    const sexo = document.getElementById('sexo').value;
    const salario = document.getElementById("salario").value;
    const vt = document.querySelector('input[name="vt"]:checked');
    const valorPassagem = document.getElementById("valorPassagem").value;

    if (vt === "sim") {
        document.getElementById("valorPassagem").disabled = false;
    }

    if (!nome || !idade || !salario || !sobrenome) {
        alert("Preencha todos os campos obrigatórios.");
        return null;
    } else {
        return {
            nome,
            sobrenome,
            idade,
            sexo,
            salario,
            vt: vt ? vt.value : "não",
            valorPassagem: vt ? valorPassagem : "N/A"
        };
    }

    console.log("Dados capturados:", {
        nome,
        sobrenome,
        idade,
        sexo,
        salario,
        vt: vt ? vt.value : "não",
        valorPassagem: vt ? valorPassagem : "N/A"
    });

}